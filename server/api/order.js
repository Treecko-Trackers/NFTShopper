const router = require("express").Router();
const {
  models: { Order },
} = require("../db");
module.exports = router;

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const order = Order.findAll({ where: { userId: id } });
    res.send(order);
  } catch (error) {
    next(error);
  }
});
