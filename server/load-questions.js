const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const app = express();
const questions = require("./models/question.js");
const { sequelize } = require("./models");

app.get("/", async (req, res) => {
  try {
    const stream = fs
      .createReadStream("answers.csv")
      .pipe(csv())
      .on("data", async (row) => {
        await questions.create(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});
