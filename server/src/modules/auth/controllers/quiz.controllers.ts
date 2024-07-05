import { Request, Response } from "express";
import fetchQuestions from "../utils/fetchQuestions";

export async function getQuestions(req: Request, res: Response) {
  try {
    const quiz = await fetchQuestions(req, res);
    res.json(quiz);
  } catch (error) {
    console.error("Error getting questions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
