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
  getAllProductsWithGalery: async (req, res) => {
    const allProducts = await Product.getAllProductsWithGalery();
    res.status(200).send(allProducts);
  },

  getProductsByIDWithGalery: async (req, res) => {
    console.log(req.body);
    const product = await Product.getProductsByIDWithGalery(req.body.id);
    console.log(product);
    res.status(200).send(product);
  },
};
