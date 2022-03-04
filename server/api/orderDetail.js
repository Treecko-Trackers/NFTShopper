const router = require('express').Router();
const {
  models: { OrderDetail },
} = require('../db');
module.exports = router;

//GET /api/orderDetail/order/:orderId
router.get('/order/:orderId', async (req, res, next) => {
  try {
    const data = await OrderDetail.findAll({
      where: {
        orderId: req.params.orderId,
      },
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

//POST /api/orderDetail/add
router.post('/add', async (req, res, next) => {
  try {
    res.status(201).send(
      await OrderDetail.create({
        orderId: req.body.orderId,
        nftId: req.body.nftId,
        cost: req.body.price,
        quantity: req.body.quantity,
      })
    );
  } catch (error) {
    next(error);
  }
});
