const db = require("../models");

const Users = db.users;

const getUsers = async (req, res) => {
  try {
    const user = await Users.findAll({});
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error retrieving users" });
  }
};

module.exports = {
  getUsers,
};
