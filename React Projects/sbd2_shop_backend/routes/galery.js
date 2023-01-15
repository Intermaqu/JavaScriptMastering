const e = require("express");
var express = require("express");
const { newGalery, getAllGalery, newFunc, getGaleryById } = require("../models/Galery");
var router = express.Router();

router.post("/addNewGalery", newGalery);
router.post("/getGaleryById", getGaleryById);


router.get("/getAllGalery", getAllGalery);

// router.post("/addNewGalery", newFunc);

module.exports = router;
