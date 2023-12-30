module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define("questions", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Questions;
};
