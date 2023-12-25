const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Questions = sequelize.define(
  "questions",
  {
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
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
