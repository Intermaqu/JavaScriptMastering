const db = require("../db/config");

module.exports = {
  getAllColors: async (req, res) => {
    let colors = await db.query("SELECT * FROM colors");
    res.status(200).send(colors.rows);
  },
  getColorById: async (req, res) => {
    let color = await db.query(`SELECT * FROM colors WHERE "ID_COLOR" = $1`, [req.body.id])
    res.status(200).send(color.rows[0]);
  }
};
