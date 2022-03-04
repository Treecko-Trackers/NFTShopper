const router = require('express').Router();

const {
  models: { Order },
} = require('../db');
module.exports = router;
console.log('made it');

//GET /api/order/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const data = await Order.findAll({
      where: {
        userId: req.params.userId,
        isFulfilled: false,
      },
    });
    // console.log('did you reach here yet api');
    // console.log('api data', data);
    res.send(data);
  } catch (error) {
    next(error);
    return false;
  }
});

//POST /api/order/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create({ userId: req.params.userId }));
  } catch (err) {
    next(err);
  }
});
