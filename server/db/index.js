const { Pool } = require("pg");

const pool = new Pool({
  user: "localhost",
  host: "quiz",
  database: "questions",
  password: "1234",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
