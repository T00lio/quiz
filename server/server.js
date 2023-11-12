const express = require("express");
const app = express();
const port = 5173;

app.get("/", (req, res) => {
  console.log("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
