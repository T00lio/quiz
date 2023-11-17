require("dotenv").config();
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
app.get("/reactQuestions", (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      question: "What is the capital of France?",
      answers: ["New York", "London", "Paris", "Dublin"],
    },
  });
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
