var express = require("express");
// const passport = require("passport");
const { getAllProducers } = require("../models/Producer");
var router = express.Router();

router.get("/getAllProducers", getAllProducers);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
