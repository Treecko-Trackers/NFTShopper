const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");
const Order = db.define("order", {
  userId: {
    type: Sequelize.INTEGER,
    unique: false,
    references: {
      model: User,
      key: "id",
    },
  },
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
});

module.exports = Order;
