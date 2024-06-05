import { Request, Response } from "express";
import generateToken from "../utils/generateToken";
import setTokenCookie from "../utils/setTokenCookie";
import prisma from "../../../config/prismaClient";
import getUserDataFromGithub from "../utils/getUserDataFromGithub";

const githubClientId = process.env.GITHUB_CLIENT_ID;
const redirectUri = process.env.GITHUB_CALLBACK_URL;

export async function getGithub(req: Request, res: Response) {
  try {
    // Redirigir al cliente a la URL de autorización de Github
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${redirectUri}&scope=user:email`;
    res.redirect(authUrl);
    console.log("authUrl", authUrl);
  } catch (error) {
    console.error("Error al solicitar apenas el redirect:", error);
    res.status(500).json({ error: "Error al solicitar apenas el redirect" });
  }
}
// Endpoint para manejar el callback de autorización de Github
export async function postGithubCallback(req: Request, res: Response) {
  try {
    const code = req.query.code as string;
    const path = req.path;
    console.log("code", code);
    console.log("path", path);

    if (!code) {
      return res.status(400).json({ error: "Code not provided" });
    }

    const githubToken = await getUserDataFromGithub({ code });

    const userData = await githubToken.json();
    console.log("userData", userData);

    let user = await prisma.user.findUnique({
      where: { githubId: userData.id.toString() },
    });
    if (!user) {
      user = await prisma.user.create({
        data: {
          githubId: userData.id.toString(),
          name: userData.name,
          picture: userData.avatar_url,
          email: userData.email || "hidden_email",
        },
      });
    }

    // Generate a token and set it as a cookie

    const payload = { userId: user.id };
    console.log("payload", payload);
    const token = await generateToken(payload);
    console.log("token", token);
    setTokenCookie(req, token);
    res.redirect(303, "http://localhost:5173");
  } catch (error) {
    console.error("Error al manejar el callback de Github:", error);
    res.status(500).json({ error: "Error al manejar el callback de Github" });
  }
}
