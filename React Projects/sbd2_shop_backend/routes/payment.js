var express = require("express");
const {
  addNewPayment,
  getAllPayment,
} = require("../controllers/paymentController");
var router = express.Router();

router.post("/addPayment", addNewPayment);

router.get("/getAllPayment", getAllPayment);
//passport.authenticate("jwt", { session: false }),
module.exports = router;
