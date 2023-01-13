const e = require("express");
var express = require("express");
const { newGalery, getAllGalery, newFunc } = require("../models/Galery");
var router = express.Router();

router.post("/addNewGalery", newGalery);
router.get("/getAllGalery", getAllGalery);

// router.post("/addNewGalery", newFunc);

module.exports = router;
