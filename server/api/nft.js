const router = require('express').Router();
const {
  models: { NFT },
} = require('../db');
module.exports = router;

// GET api/nft
router.get('/', async (req, res, next) => {
  try {
    const data = await NFT.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});
// Get api/nft/:nftid
router.get('/:nftid', async (req, res, next) => {
  try {
    const nft = await NFT.findByPk(req.params.nftid)
    res.json(nft)
  } catch(error) {
    next(error)
  }
})
