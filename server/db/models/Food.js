const Sequelize = require('sequelize')
const db = require('../db')

const Food = db.define('food', {
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"
  },
  averageRating: {
    type: Sequelize.FLOAT,
    defaultValue: 5
  },
  count:
  {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },

})

module.exports = Food
