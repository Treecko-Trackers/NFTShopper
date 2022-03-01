//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Cart = require('./models/Cart');
const FT = require('./models/FT');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Cart,
    FT,
  },
};
