const Sequelize = require('sequelize')
const db = require('../db')

const NFT = db.define('nft', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.NUMERIC,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  artist: {
    type: Sequelize.STRING,
    defaultValue: 'Grace_Hopper'
  },

  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  /*
  Index
  0 - Animal
  1 - hasHat 'Y/N'
  2 - background color
  */
  features: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }

})
module.exports = NFT
