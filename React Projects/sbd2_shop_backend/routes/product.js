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
  deleteProductById,
  updateProductNameById,
  updateProductPriceById,
  updateProductDescriptionById,
} = require("../controllers/productController");
var router = express.Router();

router.post("/addNewProduct", addNewProduct);
router.post("/getProductById", getProductById);
router.post("/getAllProductsByIdSeller", getAllProductsByIdSeller);
router.post("/getAllProductsByIdSellerWithGalery", getAllProductsByIdSellerWithGalery);
router.post("/changeStatusToSoldById", changeStatusToSoldById);
router.post("/getTotalEarned", getTotalEarned);
router.post("/deleteProductById", deleteProductById);
router.post("/updateProductNameById", updateProductNameById);
router.post("/updateProductPriceById", updateProductPriceById);
router.post("/updateProductDescriptionById", updateProductDescriptionById);

/* GET users listing. */

router.get("/getAllProducts", getAllProducts);
router.get("/getAllPostedProductsWithGalery", getAllPostedProductsWithGalery);

module.exports = router;
