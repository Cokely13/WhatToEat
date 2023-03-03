'use strict'

const {db, models: {User, Food, Order} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'Ryan', password: '123' }),
    User.create({ username: 'Scott', password: '123' }),
  ])

  const foods = await Promise.all([
    Food.create({ type: 'Pizza', image: "https://cw33.com/wp-content/uploads/sites/8/2022/02/pizza.jpg?w=2560&h=1440&crop=1"}),
    Food.create({ type: 'Chinese', image: "https://cloudfront-us-east-1.images.arcpublishing.com/dmn/EE4TYC5NWZBD3BIXW3DXI2H4QI.jpg"}),
    Food.create({ type: 'Wings', image: "https://assets.bonappetit.com/photos/6388e45a5f76f55a1e7c2136/5:7/w_2479,h_3471,c_limit/1201-air-fryer-chicken-wings-lede-v2.jpg"}),
    Food.create({ type: 'Salad', image: "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&crop=focalpoint&fp-x=0.5019&fp-y=0.3986&dm=1674525642&s=9c2e4e6b513ad441c428b0eb699493ad"}),
    Food.create({ type: 'Soup', image: "https://static.onecms.io/wp-content/uploads/sites/43/2021/04/13/8814_HomemadeChickenSoup_SoupLovingNicole_LSH-2000.jpg"}),

  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
