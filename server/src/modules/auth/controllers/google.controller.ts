import { Request, Response } from "express";
import generateToken from "../utils/generateToken";
import setTokenCookie from "../utils/setTokenCookie";
import oAuth2Client from "../../../config/oauthClient";
import prisma from "../../../config/prismaClient";
import getUserDataFromGoogle from "../utils/getUserDataFromGoogle";

export async function getGoogle(req: Request, res: Response) {
  try {
    res.header("Referrer-Policy", "no-referrer-when-downgrade");

    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline", // solicitar token de actualización
      scope: ["openid", "profile", "email"],
      prompt: "consent",
    });
    console.log("authUrl", authUrl);
    // Redirigir al cliente a la URL de autorización de Google
    res.redirect(authUrl);
    // res.json({ message: "User already exists", data: { authUrl } });
  } catch (error) {
    console.error("Error al solicitar apenas el redirect:", error);
    res.status(500).json({ error: "Error al solicitar apenas el redirect" });
  }
}

// Endpoint para manejar el callback de autorización de Google
export async function postGoogleCallback(req: Request, res: Response) {
  try {
    const code = req.query.code as string;
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    const userData = await getUserDataFromGoogle(tokens.access_token || "");

    let user = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userData.email,
          googleId: userData.sub,
          name: userData.name,
          picture: userData.picture,
        },
      });
    }
    const payload = { userId: user.id };
    const token = await generateToken(payload);

    setTokenCookie(req, token);
    res.redirect(303, "http://localhost:5173");
  } catch (error) {
    console.error("Error al manejar el callback de Google:", error);
    res.status(500).json({ error: "Error al manejar el callback de Google" });
  }
}
