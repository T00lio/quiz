require("dotenv").config();
const questionsController = require("./controllers/controller.js");
const questionRoutes = require("./routes/routes.js");
const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3004;
const { Sequelize } = require("sequelize");
const csv = require("csv-parser");
const fs = require("fs");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// router

app.use("/api/questions", questionRoutes);
//middleware
app.use((req, res, next) => {
  next();
});

var corsOptions = {
  origin: `http://localhost:${port}`,
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

//app  server

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

// reponsible for serving the client
// Path: server/server.js
