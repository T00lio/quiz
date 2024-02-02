const questionController = require("../controllers/questionController.js");

const router = require("express").Router();

router.get("/", questionController.getQuestions);

module.exports = router;
