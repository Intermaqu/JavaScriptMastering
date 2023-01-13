var express = require("express");
// const passport = require("passport");
const { getAllCategory } = require("../models/Category");
var router = express.Router();

router.get("/getAllCategory", getAllCategory);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
