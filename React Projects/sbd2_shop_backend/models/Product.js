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

  getAllPostedProductsWithGalery: async () => {
    const allProducts = await db.query(
      `SELECT * FROM product JOIN galery on product."ID_GALERY" = galery."ID_GALERY" WHERE "Status" = 'Posted'`
    );
    return allProducts.rows;
  },

  getProductById: async (id) => {
    const product = await db.query(
      `SELECT * FROM product 
      WHERE "ID_PRODUCT" = $1`,
      [id]
    );
    return product.rows[0];
  },

  changeStatusToSoldById: async (id) => {
    const product = await db.query(
      `UPDATE product 
      SET "Status" = 'Sold'
      WHERE "ID_PRODUCT" = $1`,
      [id]
    );
    return product.rows[0];
  },

  getAllProductsByIdSeller: async (id) => {
    const product = await db.query(
     `SELECT * FROM product WHERE "ID_USER" = $1`,
     [id]
    );
    return product.rows;
  },

  getAllProductsByIdSellerWithGalery: async (id) => {
    const product = await db.query(
     `SELECT * FROM product JOIN galery on product."ID_GALERY" = galery."ID_GALERY" WHERE "ID_USER" = $1`,
     [id]
    );
    return product.rows;
  },

  getTotalEarned: async (id) => {
    const product = await db.query(
     `SELECT totalEarned($1)`,
     [id]
    );
    return product.rows[0];
  },

  deleteProductById: async (id) => {
    const product = await db.query(
     `DELETE FROM product WHERE "ID_PRODUCT" = $1`,
     [id]
    );
    return product.rows[0];
  }
};
