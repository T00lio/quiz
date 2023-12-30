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

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// router
const router = require("../server/src/routes/routes.js");
app.use("/api/question", router);
//middleware
app.use((req, res, next) => {
  next();
});

var corsOptions = {
  origin: "http://localhost:3004",
};

//react questions

//sequelize db version

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Hello from api!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

// db connection

//regular db version
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

//app  server

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

// reponsible for serving the client
// Path: server/server.js
