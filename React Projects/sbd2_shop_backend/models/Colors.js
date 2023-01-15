const db = require("../db/config");

module.exports = {
  addNewColor: async ({ name, color_hex }) => {
    let color = await db.query(
      `INSERT INTO colors ("Name", "color_hex") VALUES ($1, $2)`,
      [name, color_hex]
    );
    return color;
  },
  getAllColors: async (req, res) => {
    let colors = await db.query("SELECT * FROM colors");
    res.status(200).send(colors.rows);
  },
  getColorById: async (req, res) => {
    let color = await db.query(`SELECT * FROM colors WHERE "ID_COLOR" = $1`, [
      req.body.id,
    ]);
    res.status(200).send(color.rows[0]);
  },
};
