const db = require("../../models/index.js");

// create main model

// const Question = db.questions;
const Answer = db.answers;

// main controller

const getQuestions = async (req, res) => {
  try {
    // const question = await Question.findAll({});
    const answer = await Answer.findAll({
      where: {
        subject: req.query.subject,
      },
    });
    res.status(200).send(answer);
    console.log(res);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error retrieving questions" });
  }
};

module.exports = {
  getQuestions,
};
