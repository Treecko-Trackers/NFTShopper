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
    const nft = await NFT.findByPk(req.params.nftid);
    res.json(nft);
  } catch (error) {
    next(error);
  }
});
// Get api/nft/category/artist/Grace_Hopper
router.get('/category/artist/:artist', async (req, res, next) => {
  try {
    const nfts = await NFT.findAll({
      where: {
        artist: req.params.artist,
      },
    });
    res.json(nfts);
  } catch (err) {
    next(err);
  }
});
// Get api/nft/category/animal/animalName
router.get('/category/animal/:animal', async (req, res, next) => {
  try {
    const nfts = await NFT.findAll();
    res.send(
      nfts.filter((nft) => nft.dataValues.features[0] === req.params.animal)
    );
  } catch (err) {
    next(err);
  }
});
// Get api/nft/category/hat/withHat
router.get('/category/hat/:withHat', async (req, res, next) => {
  try {
    const nfts = await NFT.findAll();
    res.send(
      nfts.filter((nft) => nft.dataValues.features[1] === req.params.withHat)
    );
  } catch (err) {
    next(err);
  }
});

// Get api/nft/category/background/backgroundColor
router.get('/category/background/:color', async (req, res, next) => {
  try {
    const nfts = await NFT.findAll();
    res.send(
      nfts.filter((nft) => nft.dataValues.features[2] === req.params.color)
    );
  } catch (err) {
    next(err);
  }
});

/*
GET /category/artist - shows all nfts by specific artist
GET /category/animal - shows all nfts with animal category
GET /category/hat - shows all nfts with hats
GET /category/backgroundColor/color - shows all nfts with that specific color
*/
