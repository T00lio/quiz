const questionController = require("../controllers/controller.js");

const router = require("express").Router();

router.get("/api/question", questionController.getQuestions);

module.exports = router;
