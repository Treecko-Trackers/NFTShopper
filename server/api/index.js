const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/nft', require('./nft'));
router.use('/order', require('./order'));
router.use('/orderDetail', require('./orderDetail'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
