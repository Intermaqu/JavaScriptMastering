const db = require("../db/config");

module.exports = {
  addNewCategory: async ({ name, description }) => {
    let category = await db.query(
      `INSERT INTO category ("Name", "Description") VALUES ($1, $2)`,
      [name, description]
    );
    return category;
  },
  getAllCategory: async (req, res) => {
    let categories = await db.query("SELECT * FROM category");
    res.status(200).send(categories.rows);
  },
  getCategoryById: async (req, res) => {
    let category = await db.query(
      `SELECT * FROM category WHERE "ID_CATEGORY" = $1`,
      [req.body.id]
    );
    res.status(200).send(category.rows[0]);
  },
};
