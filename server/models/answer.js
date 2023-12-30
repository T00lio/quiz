module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define("answer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    option1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    option2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    option3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    option4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correct4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Answer;
};
