const db = require("../../models");

// create main model

const Question = db.questions;
const Answer = db.answers;

// main controller

const getQuestions = async (req, res) => {
  let questions = await Question.findAll({});
  res.status(200).send(questions);
  console.log(questions);
};

module.exports = {
  getQuestions,
};
