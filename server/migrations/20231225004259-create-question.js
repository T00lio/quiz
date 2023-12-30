"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      Option1: {
        type: Sequelize.STRING,
      },
      correct1: {
        type: Sequelize.BOOLEAN,
      },
      Option2: {
        type: Sequelize.STRING,
      },
      correct2: {
        type: Sequelize.BOOLEAN,
      },
      Option3: {
        type: Sequelize.STRING,
      },
      correct3: {
        type: Sequelize.BOOLEAN,
      },
      Option4: {
        type: Sequelize.STRING,
      },
      correct4: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
