const db = require("../models");

// create main model

const Question = db.questions;
const Answer = db.answers;

// main controller

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({});
    res.status(200).send(questions);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error retrieving questions" });
  }
};

module.exports = {
  getQuestions,
};
