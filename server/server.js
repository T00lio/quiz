require("dotenv").config();
const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3004;

//middleware
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(cors());

app.use(express.json());

//routes for questions

//react questions
app.get("/reactQuestions", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT a.*, b.* FROM questions AS a JOIN answers AS b ON a.question_id = b.id"
    );
    console.log(result);
    res.status(202).json({
      status: "success",
      results: result.rows.length,
      data: result.rows.map((row) => ({
        id: row.question_id,
        question: row.question_text,
        subject: row.question_subject,
        answers: [
          {
            id: row.answer_id,
            answer1: row.answer_text,
            isCorrect1: row.is_correct,
            answer2: row.answer_text,
            isCorrect2: row.is_correct,
            answer3: row.answer_text,
            isCorrect3: row.is_correct,
            answer4: row.answer_text,
            isCorrect4: row.is_correct,
          },
        ],
      })),
    });
  } catch (err) {
    console.log(err);
  }
});

//js questions
app.get("/jsQuestions", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      question: "What is the capital of France?",
      answers: ["New York", "London", "Paris", "Dublin"],
    },
  });
});

//html questions

app.get("/htmlQuestions", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      question: "What is the capital of France?",
      answers: ["New York", "London", "Paris", "Dublin"],
    },
  });
});

//css questions

app.get("/cssQuestions", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      question: "What is the capital of France?",
      answers: ["New York", "London", "Paris", "Dublin"],
    },
  });
});

//routes for users

app.get("/user:id", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      username: "John Doe",
      score: 0,
    },
  });
});

app.post("/user:id", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      username: "John Doe",
      score: 0,
    },
  });
});

//app  server

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

// reponsible for serving the client
// Path: server/server.js
