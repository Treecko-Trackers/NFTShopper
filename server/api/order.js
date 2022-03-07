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
  const order = await Order.Create({ userId: id });
});

//Filtered Order
router.get("/currentOrder/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findAll({
      where: { userId: id, isFufilled: false },
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});
