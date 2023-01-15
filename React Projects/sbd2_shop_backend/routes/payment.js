var express = require("express");
const { addNewPayment } = require("../controllers/paymentController");
var router = express.Router();

router.post("/addPayment", addNewPayment);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
