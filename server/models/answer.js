module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define(
    "answers",
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correct1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correct2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correct3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      option4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correct4: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Answer;
};
