const { Pool } = require("pg");

const pool = new Pool({
  user: "tuliosalvatierra",
  host: "/tmp",
  database: "questions",
  password: "1234",
  port: 5432,
  dialect: "postgres",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
