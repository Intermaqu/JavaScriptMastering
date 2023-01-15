var express = require("express");
const { addNewDelivery } = require("../controllers/deliveryController");
var router = express.Router();

router.post("/addDelivery", addNewDelivery);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
