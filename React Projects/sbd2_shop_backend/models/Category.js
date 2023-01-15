const db = require("../db/config");

module.exports = {
  getAllCategory: async (req, res) => {
    let categories = await db.query("SELECT * FROM category");
    res.status(200).send(categories.rows);
  },
  getCategoryById: async (req, res) => {
    let category = await db.query(`SELECT * FROM category WHERE "ID_CATEGORY" = $1`, [req.body.id]);
    res.status(200).send(category.rows[0]);
  },
};
