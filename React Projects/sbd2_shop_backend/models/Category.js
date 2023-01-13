const db = require("../db/config");

module.exports = {
  getAllCategory: async (req, res) => {
    let categories = await db.query("SELECT * FROM category");
    res.status(200).send(categories.rows);
  },
};
