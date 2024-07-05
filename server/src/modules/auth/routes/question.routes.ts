import { Router } from "express";
import { getQuestions } from "../controllers/quiz.controllers";

const router = Router();

router.get("/:subject", getQuestions);

export default router;
