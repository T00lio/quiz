import { Request } from "express";

export const setTokenCookie = (req: Request, token: string) => {
  req.cookies.set("access_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set to true if your app is served over HTTPS
    sameSite: "strict", // Adjust this value according to your needs (e.g., 'lax' or 'none')
    maxAge: 3600000, // 1 hour
  });
};
