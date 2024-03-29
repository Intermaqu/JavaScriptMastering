const Galery = require("../models/Galery");
const Product = require("../models/Product");

module.exports = {
  addNewProduct: async (req, res) => {
    console.log(req.body);
    const {
      name,
      price,
      description,
      status,
      id_producer,
      id_category,
      id_color,
      photo_1,
      photo_2,
      photo_3,
      photo_4,
      id_user,
    } = req.body;

    if (
      !name ||
      !price ||
      !description ||
      !status ||
      !id_producer ||
      !id_category ||
      !id_color ||
      !photo_1 ||
      !id_user
    ) {
      res.status(400).send("Missing Data!");
      return 0;
    }
    const galery = await Galery.newGalery(photo_1, photo_2, photo_3, photo_4);
    await Product.newProduct(
      name,
      price,
      description,
      status,
      id_producer,
      id_category,
      id_user,
      galery.ID_GALERY,
      id_color
    );
    res.status(200).send("Product Added!");
  },
  getAllProducts: async (req, res) => {
    const allProducts = await Product.getAllProducts();
    res.status(200).send(allProducts);
  },
  getAllPostedProductsWithGalery: async (req, res) => {
    const allProducts = await Product.getAllPostedProductsWithGalery();
    res.status(200).send(allProducts);
  },

  getProductById: async (req, res) => {
    // console.log(req.body);
    const product = await Product.getProductById(req.body.id);
    // console.log(product);
    res.status(200).send(product);
  },

  changeStatusToSoldById: async (req, res) => {
    // console.log(req.body);
    const product = await Product.changeStatusToSoldById(req.body.id);
    // console.log(product);
    res.status(200).send(product);
  },

  getAllProductsByIdSeller: async (req, res) => {
    const products = await Product.getAllProductsByIdSeller(req.body.id);
    res.status(200).send(products)
  },

  getAllProductsByIdSellerWithGalery: async (req, res) => {
    const products = await Product.getAllProductsByIdSellerWithGalery(req.body.id);
    res.status(200).send(products)
  },

  getTotalEarned: async (req, res) => {
    const products = await Product.getTotalEarned(req.body.id);
    res.status(200).send(products)
  },

  deleteProductById: async (req, res) => {
    const product = await Product.deleteProductById(req.body.id);
    res.status(200).send(product)
  },
  updateProductNameById: async (req, res) => {
    const product = await Product.updateProductNameById(req.body.name, req.body.id);
    res.status(200).send(product)
  },
  updateProductPriceById: async (req, res) => {
    const product = await Product.updateProductPriceById(req.body.price, req.body.id);
    res.status(200).send(product)
  },
  updateProductDescriptionById: async (req, res) => {
    const product = await Product.updateProductDescriptionById(req.body.description, req.body.id);
    res.status(200).send(product)
  },
};
