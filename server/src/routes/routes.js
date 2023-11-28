const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/reactQuestion", controller.getQuiz);

module.exports = router;
