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

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findAll({ where: { userId: id } });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.create({ userId: id });
  res.send(order);
});

//Filtered Order
router.get("/currentOrder/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findAll({
      where: { userId: id, isFufilled: false },
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
})
