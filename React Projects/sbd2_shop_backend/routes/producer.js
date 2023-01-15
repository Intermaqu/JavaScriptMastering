var express = require("express");
const { addNewProducer } = require("../controllers/producerController");
// const passport = require("passport");
const { getAllProducers } = require("../models/Producer");
var router = express.Router();

router.get("/getAllProducers", getAllProducers);
router.post("/addProducer", addNewProducer);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
