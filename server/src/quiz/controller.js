const pool = require("../../db");

const getQuiz = (req, res) => {
  pool.query("SELECT * FROM questions", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getQuiz,
};
