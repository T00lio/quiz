const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const app = express();
const { sequelize, questions } = require("../server/models/index.js");
const port = process.env.PORT || 3005;

app.get("/", async (req, res) => {
  try {
    fs.createReadStream("./answers.csv")
      .pipe(csv())
      .on("data", async (row) => {
        await questions?.create(row);
        console.log(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });

    res
      .status(200)
      .json({ status: "success", message: "Rows added to the database model" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while adding rows to the database model",
    });
  }
});

// Inicia el servidor
app.listen(port, async () => {
  console.log("Database connection established.");
});
