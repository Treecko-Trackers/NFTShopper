const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Cart;
