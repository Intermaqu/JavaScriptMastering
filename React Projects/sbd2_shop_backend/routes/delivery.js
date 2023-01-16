var express = require("express");
const {
  addNewDelivery,
  getAllDelivery,
} = require("../controllers/deliveryController");
var router = express.Router();

router.post("/addDelivery", addNewDelivery);

router.get("/getAllDelivery", getAllDelivery);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
