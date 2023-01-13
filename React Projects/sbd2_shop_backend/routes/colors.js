var express = require("express");
// const passport = require("passport");
const { getAllColors } = require("../models/Colors");
var router = express.Router();

router.get("/getAllColors", getAllColors);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
