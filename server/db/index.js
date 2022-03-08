//this is the access point for all things database related!

const db = require("./db");

const User = require('./models/User');
const Order = require('./models/Order');
const NFT = require('./models/NFT');
const OrderDetail = require('./models/OrderDetail');



Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(NFT, { through: OrderDetail });
NFT.belongsToMany(Order, { through: OrderDetail });

module.exports = {
  db,
  models: {
    User,
    Order,
    NFT,
    OrderDetail
  },
};
