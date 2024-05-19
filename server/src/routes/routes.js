const questionController = require("../controllers/controller.js");

const router = require("express").Router();

router.get("/", questionController.getQuestions);

module.exports = router;
