//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Order = require('./models/Order');
const NFT = require('./models/NFT');
const OrderDetail = require('./models/OrderDetail');

// associations could go here!
Order.belongsToMany(NFT, { through: OrderDetail });
NFT.belongsToMany(Order, { through: OrderDetail });

Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
  db,
  models: {
    User,
    Order,
    NFT,
    OrderDetail,
  },
};
