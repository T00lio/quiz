import { Request } from "express";
import prisma from "../../../config/prismaClient";

async function getUserByTokenId(req: Request) {
  const userId = req.auth?.userId;

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return user;
}

export default getUserByTokenId;
