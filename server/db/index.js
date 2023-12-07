const { Pool } = require("pg");

const pool = new Pool({
  user: "tuliosalvatierra",
  host: "/tmp",
  database: "quiz_app",
  password: "1749",
  port: 3001,
});
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log(
      "Successfully connected to the database. Current time:",
      res.rows[0].now
    );
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
