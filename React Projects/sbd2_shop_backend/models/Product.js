const db = require("../db/config");

module.exports = {
  newProduct: async (
    name,
    price,
    description,
    status,
    id_producer,
    id_category,
    id_user,
    id_galery,
    id_color
  ) => {
    let user = await db.query(
      `INSERT INTO product ("Name", "Price", "Description", "Status", "ID_PRODUCER", "ID_CATEGORY", "ID_USER", "ID_GALERY", "ID_COLOR") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        name,
        price,
        description,
        status,
        id_producer,
        id_category,
        id_user,
        id_galery,
        id_color,
      ]
    );
    return user;
  },
  getAllProducts: async () => {
    const allProducts = await db.query("SELECT * FROM product");
    return allProducts.rows;
  },

  getAllProductsWithGalery: async () => {
    const allProducts = await db.query(
      `SELECT * FROM product JOIN galery on product."ID_GALERY" = galery."ID_GALERY"`
    );
    return allProducts.rows;
  },

  getProductsByIDWithGalery: async (id) => {
    const product = await db.query(
      `SELECT * FROM product 
      JOIN galery on product."ID_GALERY" = galery."ID_GALERY" 
      JOIN category on product."ID_CATEGORY" = category."ID_CATEGORY" 
      JOIN colors on product."ID_COLOR" = colors."ID_COLOR" 
      WHERE "ID_PRODUCT" = $1`,
      [id]
    );
    return product.rows[0];
  },
};
