const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/quiz"
);

const Questions = sequelize.define(
  "questions",
  {
    question_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Questions;
