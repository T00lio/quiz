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
const cookieSession = require("cookie-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const authRoute = require("./routes/auth");

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

//google sign in

app.use(
  cookieSession({
    name: "session",
    keys: ["quiz"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: `http://localhost:${port}`,
    methods: ["GET", "POST, PUT, DELETE"],
    credentials: true,
  })
);

app.use("/auth", authRoute);

//app  server

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
