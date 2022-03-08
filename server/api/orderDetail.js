const router = require("express").Router();
const {
  models: { OrderDetail, NFT },
} = require("../db");
const Order = require("../db/models/Order");
module.exports = router;

//api/orderDetail/:orderid
router.get("/:orderId", async (req, res, next) => {
  try {
    const orders = await OrderDetail.findAll({
      where: {
        orderId: req.params.orderId,
      },
    });
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

router.get("/:orderId/nft/:nftId", async (req, res, next) => {
  try {
    const orders = await OrderDetail.findAll({
      where: {
        orderId: req.params.orderId,
        nftId: req.params.nftId,
      },
    });
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

router.post("/:orderId", async (req, res, next) => {
  try {
    console.log("here");
    res.status(201).send(
      await OrderDetail.create({
        orderId: req.body.orderId,
        nftId: req.body.nftId,
        cost: req.body.cost,
        quantity: req.body.quantity,
      })
    );
  } catch (error) {
    next(error);
  }
});

router.put("/:orderId/nft/:nftId", async (req, res, next) => {
  try {
    console.log(req.body);
    const order = await OrderDetail.update(
      {
        quantity: req.body.quantity,
      },
      {
        where: {
          orderId: req.params.orderId,
          nftId: req.params.nftId,
        },
      }
    );
    res.send(order);
  } catch (error) {
    next(error);
  }
});
