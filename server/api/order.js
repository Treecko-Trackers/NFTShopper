const router = require('express').Router();

const {
  models: { Order },
} = require('../db');
module.exports = router;
console.log('made it')

router.post('/:userId', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create({userId: req.params.userId}))
  } catch(err) {
    next(err)
  }
})

