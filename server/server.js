const passportSetup = require("./passport.js");
const passport = require("passport");
const questionsController = require("./controllers/questionController.js");
const questionRoutes = require("./routes/routes.js");
const db = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3004;
const { Sequelize } = require("sequelize");
const csv = require("csv-parser");
const fs = require("fs");
const cookieSession = require("cookie-session");
const authRoute = require("./routes/auth.js");
const dotenv = require("dotenv");
dotenv.config();

//oauth section

app.use("/auth", authRoute);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the request origin is allowed
      // You can implement more specific logic here, also add https version client URL
      const allowedOrigins = ["http://localhost:5173"];
      const isAllowed = allowedOrigins.includes(origin);

      callback(null, isAllowed);
    },
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

// router

app.use("/api/questions", questionRoutes);

//sequelize db version

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Hello from api!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

//app server

app.listen(port, () => {
  console.log(`app at http://localhost:${port}`);
});
