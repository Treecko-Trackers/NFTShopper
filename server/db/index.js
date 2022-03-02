//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Cart = require('./models/Cart');
const NFT = require('./models/NFT');

//associations could go here!
// Cart.belongsToMany(FT, { through: Cart_FT });
// FT.belongsToMany(Cart, { through: Cart_FT });

// Cart.belongsTo(User);
// User.hasOne(Cart);

module.exports = {
  db,
  models: {
    User,
    Cart,
    NFT,
  },
};
