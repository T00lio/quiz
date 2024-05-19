import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = Router();
const prisma = new PrismaClient();

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

      jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
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

    jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/oauth", async (req: Request, res: Response) => {
  const { email, provider, providerId } = req.body;

  try {
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          provider,
          providerId,
        },
      });
    }

    const payload = { userId: user.id };

    jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
