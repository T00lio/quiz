const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const app = express();
const { sequelize, answers } = require("../server/models/index.js");
const port = process.env.PORT || 3005;

app.get("/", async (req, res) => {
  try {
    const rows = [];
    fs.createReadStream("./answers - React.csv")
      .pipe(csv())
      .on("data", (row) => {
        rows.push(row); // Collect rows in an array
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");

        // Process each row sequentially
        for (const row of rows) {
          console.log(row);
          await answers.create(row);
        }

        res.status(200).json({
          status: "success",
          message: "Rows added to the database model",
        });
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while adding rows to the database model",
    });
  }
});

// Start the server
app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
});
