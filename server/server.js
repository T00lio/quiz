require("dotenv").config();
const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3004;
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    // Add any other necessary configuration options
  }
);
//middleware
app.use((req, res, next) => {
  next();
});

app.use(cors());

app.use(express.json());

//routes for questions

//react questions

//sequelize db
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", err);
  }
};

(async () => {
  await connectDb();
  console.log("hello");
})();

app.get("/api/reactQuestions", async (req, res) => {
  res.json({ message: "Hello from server!" });
});

//regular db
app.get("/reactQuestions", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT q.question_id, q.question_text, a.option1,a.correct1,a.option2,a.correct2,a.option3,a.correct3,a.option4,a.correct4  " +
        "FROM questions AS q " +
        "JOIN answers AS a ON q.question_id = a.id"
    );

    res.status(202).json({
      status: "success",
      results: result.length,
      data: result.rows,
    });
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
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
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
  console.log(`app listening at http://localhost:${port}`);
});

// reponsible for serving the client
// Path: server/server.js
