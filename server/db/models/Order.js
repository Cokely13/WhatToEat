const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('orders', {
  // type: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  rating: {
    type: Sequelize.INTEGER,
  },

})

module.exports = Orders
