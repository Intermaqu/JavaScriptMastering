var express = require("express");
// const passport = require("passport");
const { getAllCategory, getCategoryById } = require("../models/Category");
var router = express.Router();

router.post("/getCategoryById", getCategoryById)


router.get("/getAllCategory", getAllCategory);

//passport.authenticate("jwt", { session: false }),
module.exports = router;
