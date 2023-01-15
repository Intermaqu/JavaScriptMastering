var express = require("express");
// const passport = require("passport");
const { getAllColors, getColorById } = require("../models/Colors");
var router = express.Router();

router.post("/getColorById", getColorById)

router.get("/getAllColors", getAllColors);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
