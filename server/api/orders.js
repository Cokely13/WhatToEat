const router = require('express').Router()
const { models: { Order, User, Food}} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({include: [User, Food]})
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const orderId = req.params.id
    const order = await Order.findByPk(req.params.id, {include: [User, Food]});
    // , where: {
    //   userId: req.params.id
    // }
    res.json(order);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id)
    res.send(await order.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.send(order);
  } catch (error) {
    next(error);
  }
});
