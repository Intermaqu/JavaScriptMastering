var express = require("express");
const {
  addNewProduct,
  getAllProducts,
  getAllPostedProductsWithGalery,
  getProductById,
  changeStatusToSoldById,
} = require("../controllers/productController");
var router = express.Router();

router.post("/addNewProduct", addNewProduct);
router.post("/getProductById", getProductById);
router.post("/changeStatusToSoldById", changeStatusToSoldById);

/* GET users listing. */

router.get("/getAllProducts", getAllProducts);
router.get("/getAllPostedProductsWithGalery", getAllPostedProductsWithGalery);

module.exports = router;
