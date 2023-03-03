//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Food = require('./models/Food')
const Order = require('./models/Order')

//associations could go here!
User.hasMany(Order)
Order.belongsTo(User)
Food.hasMany(Order)
Order.belongsTo(Food)

module.exports = {
  db,
  models: {
    User,
    Food,
    Order
  },
}
