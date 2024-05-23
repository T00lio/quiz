import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import generateToken from "../utils/generateToken";
import setTokenCookie from "../utils/setTokenCookie";
import generateResetToken from "../utils/generateResetToken";
import sendResetPasswordEmail from "../utils/sendResetPasswordEmail";
import oAuth2Client from "../../../config/oauthClient";
import getUserByTokenId from "../utils/getUserByTokenId";
import prisma from "../../../config/prismaClient";
import verifyResetToken from "../utils/verifyResetToken";
import hashPassword from "../utils/hashPassword";

export async function getUser(req: Request, res: Response) {
  try {
    const user = await getUserByTokenId(req);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      email: user.email,
      name: user.name,
      picture: user.picture,
    });
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function postSignup(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const payload = { userId: user.id };
    const token = await generateToken(payload);

    setTokenCookie(req, token);
    res.status(201).json({
      message: "User successfully created",
      data: {
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

export async function postSignin(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (!user.password) {
      return res.status(400).json({ message: "NoPasswordConfigured" });
    }

    const isMatch = await bcrypt.compare(password, user.password!);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const payload = { userId: user.id };
    const token = await generateToken(payload);

    setTokenCookie(req, token);
    res.status(200).json({
      message: "Authentication successful",
      data: {
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

export async function postLogout(req: Request, res: Response) {
  const user = await getUserByTokenId(req);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    if (user.githubId) {
      const token = req.cookies.access_token;

      if (token) {
        oAuth2Client.setCredentials({ access_token: token });

        // Revoke the token using Google API
        await oAuth2Client.revokeCredentials();
      }
    }
    res.clearCookie("access_token");
    res.json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ error: "Error during logout" });
  }
}

export async function postForgotPassword(req: Request, res: Response) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "User with this email does not exist." });
    }

    const resetToken = generateResetToken({ userId: user.id });
    const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;

    // Aquí enviarías el email con el enlace de restablecimiento. Por ejemplo:
    await sendResetPasswordEmail(email, resetLink);

    res.status(200).json({ message: "Password reset link sent to your email." });
  } catch (err) {
    console.error("Error sending password reset email:", err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function postResetPassword(req: Request, res: Response) {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: "Invalid request" });
  }

  try {
    // Verificar el token de restablecimiento
    const decoded: any = verifyResetToken(token);
    const userId = decoded.userId;

    // Buscar el usuario en la base de datos
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Generar una nueva contraseña hasheada
    const hashedPassword = await hashPassword(newPassword);

    // Actualizar la contraseña del usuario en la base de datos
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    const payload = { userId };
    const accessToken = await generateToken(payload);

    setTokenCookie(req, accessToken);
    res.status(200).json({
      message: "Password has been reset successfully",
      data: {
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error("Error resetting password:", err);
    res.status(500).json({ error: "Server error" });
  }
}
