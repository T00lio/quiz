const config = require("../config/config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

sequelize.authenticate().then(
  () => console.log("Connected to questions database"),
  (err) => console.log(err)
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.questions = require("./question.js")(sequelize, DataTypes);
db.answers = require("./answer.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;
