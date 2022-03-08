const Sequelize = require("sequelize");
const db = require("../db");
const NFT = require("./NFT");
const Order = require("./Order");

const OrderDetail = db.define("orderDetail", {
  orderId: {
    type: Sequelize.INTEGER,
    unique: false,
    references: {
      model: Order,
      key: "id",
    },
  },
  nftId: {
    type: Sequelize.INTEGER,
    unique: false,
    references: {
      model: NFT,
      key: "id",
    },
  },
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = OrderDetail;
