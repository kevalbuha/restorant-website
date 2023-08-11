const express = require("express");
const router = express.Router();

router.post("/orderData", (req, res) => {
  try {
    res.send([global.good_items, global.foodCatagoryData]);

    console.log(global.good_items);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;