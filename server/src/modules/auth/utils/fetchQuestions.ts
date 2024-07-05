import { Request, Response } from "express";
import prisma from "../../../config/prismaClient";

async function fetchQuestions(req: Request, res: Response) {
  try {
    const { subject } = req.params;
    // If the subject is provided, filter the questions by the subject

    const questions = await prisma.question.findMany({
      where: subject
        ? {
            subject: {
              name: subject,
            },
          }
        : undefined,
      include: {
        options: true,
      },
    });
    return res.json(questions);
    console.log(`Fetched questions: ${JSON.stringify(questions)}`);
  } catch (error) {
    console.error("Error getting questions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default fetchQuestions;
