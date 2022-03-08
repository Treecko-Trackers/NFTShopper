const router = require('express').Router();
const {
  models: { Order },
} = require('../db');
module.exports = router;

// PUT /api/order/:orderId/complete
router.put('/:orderId/complete', async (req, res, next) => {
  try {
    const id = req.params.id;
    const findOrder = await Order.findByPk(id);
    const status = findOrder.isFulfilled;
    if (status !== 'TRUE') {
      await Order.update({ isFulfilled: 'TRUE' }, { where: { id: id } });
    }
    const order = await Order.findByPk(id);
    res.send(order);
  } catch (error) {
    next(error);
  }
});
