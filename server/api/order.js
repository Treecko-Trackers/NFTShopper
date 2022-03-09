const router = require('express').Router();
const {
  models: { Order },
} = require('../db');
module.exports = router;

// GET /api/order/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findAll({ where: { userId: id } });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

// PUT /api/order/:userId/complete
router.put('/:userId/complete', async (req, res, next) => {
  try {
    const id = req.params.id;
    const findOrder = await Order.findByPk(id);
    const status = findOrder.isFulfilled;
    if (status !== 'TRUE') {
      await Order.update({ isFulfilled: 'TRUE' }, { where: { userId: id } });
    }
    const order = await Order.findByPk(id);
    res.send(order);
  } catch (error) {
    next(error);
  }
});

// POST /api/order/:id
router.post('/:id', async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.create({ userId: id });
  res.send(order);
});

// GET /api/order/currentOrder/:id - Filtered Order
router.get('/currentOrder/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { userId: id, isFulfilled: false },
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});
