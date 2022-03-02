const router = require('express').Router();
const {
  models: { FT },
} = require('../db');
module.exports = router;

// GET api/nft
router.get('/', async (req, res, next) => {
  try {
    const data = await FT.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});
