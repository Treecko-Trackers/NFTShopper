const Sequelize = require('sequelize');
const db = require('../db');
const NFT = require('./NFT');
const Order = require('./Order');

const OrderDetail = db.define('orderDetail', {
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id',
    },
  },
  nftId: {
    type: Sequelize.INTEGER,
    references: {
      model: NFT,
      key: 'id',
    },
  },
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = OrderDetail;
