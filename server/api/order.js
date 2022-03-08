const router = require("express").Router();
const {
  models: { Order },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findAll({ where: { userId: id } });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.create({ userId: id });
  res.send(order);
});

//Filtered Order
router.get("/currentOrder/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { userId: id, isFulfilled: false },
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});
