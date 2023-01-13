var express = require("express");
const {
  addNewProduct,
  getAllProducts,
  getAllProductsWithGalery,
  getProductsByIDWithGalery,
} = require("../controllers/productController");
var router = express.Router();

router.post("/addNewProduct", addNewProduct);
router.post("/getProductsByIDWithGalery", getProductsByIDWithGalery);

/* GET users listing. */

router.get("/getAllProducts", getAllProducts);
router.get("/getAllProductsWithGalery", getAllProductsWithGalery);

module.exports = router;
