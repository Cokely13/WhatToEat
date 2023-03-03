const router = require('express').Router()
const { models: { Order, Food}} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const averageRating = 2 + 3
    const foods = await Food.findAll({include: Order})
    foods.averageRating = averageRating
    res.json(foods)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const foodId = req.params.id
    const averageRating = 2 + 2
    const food = await Food.findByPk(req.params.id, {include: Order });
    food.averageRating = averageRating
    // , where: {
    //   userId: req.params.id
    // }
    res.json(food);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Food.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id)
    res.send(await food.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const food = await Food.findByPk(req.params.id);
    await food.destroy();
    res.send(food);
  } catch (error) {
    next(error);
  }
});
