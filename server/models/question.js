module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("questions", {
    question_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question_subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Questions;
};
