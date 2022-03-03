const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');

const Order = db.define('order', {
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  total: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
