const db = require("../db/config");

module.exports = {
  newGalery: async (photo_1, photo_2, photo_3, photo_4) => {
    let galery = await db.query(
      `INSERT INTO galery ("photo_1", "photo_2", "photo_3", "photo_4") VALUES ($1, $2, $3, $4)`,
      [photo_1, photo_2, photo_3, photo_4]
    );
    let galeryId = await db.query(
      'select "ID_GALERY" from galery ORDER BY "ID_GALERY" DESC'
    );
    return galeryId.rows[0];
  },

  newFunc: async (req, res) => {
    res.status(200).send("Works!");
  },

  getAllGalery: async (req, res) => {
    let galery = await db.query("SELECT * FROM galery");
    res.status(200).send(galery.rows);
  },

  getGaleryById: async (req, res) => {
    let galery = await db.query(`SELECT * FROM galery WHERE "ID_GALERY" = $1`, [req.body.id])
    res.status(200).send(galery.rows[0]);
  }
};
