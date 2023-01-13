const db = require("../db/config");

module.exports = {
  getAllColors: async (req, res) => {
    let colors = await db.query("SELECT * FROM colors");
    res.status(200).send(colors.rows);
  },
};
