var express = require("express");
const {
  addNewProduct,
  getAllProducts,
  getAllPostedProductsWithGalery,
  getProductById,
  changeStatusToSoldById,
  getAllProductsByIdSeller,
  getAllProductsByIdSellerWithGalery,
  getTotalEarned,
  deleteProductById
} = require("../controllers/productController");
var router = express.Router();

router.post("/addNewProduct", addNewProduct);
router.post("/getProductById", getProductById);
router.post("/getAllProductsByIdSeller", getAllProductsByIdSeller);
router.post("/getAllProductsByIdSellerWithGalery", getAllProductsByIdSellerWithGalery);
router.post("/changeStatusToSoldById", changeStatusToSoldById);
router.post("/getTotalEarned", getTotalEarned);
router.post("/deleteProductById", deleteProductById);

/* GET users listing. */

router.get("/getAllProducts", getAllProducts);
router.get("/getAllPostedProductsWithGalery", getAllPostedProductsWithGalery);

module.exports = router;
