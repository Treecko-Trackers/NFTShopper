const router = require('express').Router();
const {
  models: { FT },
} = require('../db');
module.exports = router;

// GET /nft
router.get('/', async (req, res, next) => {
  try {
    const { users } = await FT.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});
