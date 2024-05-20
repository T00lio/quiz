import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import { generateToken } from "../utils/generateToken";
import { checkJwtAuth0 } from "../middlewares/checkJwt";
import { setTokenCookie } from "../utils/setTokenCookie";
import { ExtendedJwtPayload } from "../types/jwtPayload";

const router = Router();
const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  auth?: {
    sub: string;
    email?: string;
  };
}

router.post(
  "/signup",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  async (req: Request, res: Response) => {
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
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          provider: "local",
        },
      });

      const payload = { userId: user.id };
      const token = await generateToken(payload);

      setTokenCookie(req, token);
      res.status(200).json({ message: "Authentication successful" });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  },
);

router.post("/signin", [check("email").isEmail(), check("password").exists()], async (req: Request, res: Response) => {
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
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password!);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = { userId: user.id };
    const token = await generateToken(payload);

    setTokenCookie(req, token);
    res.status(200).json({ message: "Authentication successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/oauth", checkJwtAuth0, async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).send("Email is required");
    }

    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          provider: "auth0",
          providerId: req.auth?.sub as string, // User ID from Auth0
        },
      });
    }

    const payload = { userId: user.id };
    const token = await generateToken(payload);

    setTokenCookie(req, token);
    res.status(200).json({ message: "Authentication successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/google/callback", async (req: Request, res: Response) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("No authorization code provided.");
  }

  try {
    const params = new URLSearchParams({
      code: code as string,
      client_id: process.env.OAUTH_GOOGLE_CLIENT_ID as string,
      client_secret: process.env.OAUTH_GOOGLE_CLIENT_SECRET as string,
      redirect_uri: "http://localhost:3000/auth/google/callback",
      grant_type: "authorization_code",
    });

    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error_description || "Failed to exchange code for token");
    }

    // Aquí puedes validar y procesar el token recibido de Google
    // Por ejemplo, puedes obtener el user_id del token de Google
    const payload = { userId: data.id_token }; // Extrae el ID del usuario del token de Google
    const token = await generateToken(payload);
    setTokenCookie(req, token);
    res.redirect("/"); // Redirige al usuario al frontend
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).send("Authentication failed");
  }
});

router.post("/logout", async (req: Request, res: Response) => {
  req.cookies.set("access_token", "", { expires: new Date(0) });
  res.json({ message: "Sesión cerrada exitosamente" });
});

export default router;
