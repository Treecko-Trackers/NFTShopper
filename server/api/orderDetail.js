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
