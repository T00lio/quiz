import { getQuestions } from "../../controllers/controllers.js";

const router = require("express").Router();

router.get("/", getQuestions);

export default router;
