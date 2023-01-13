const db = require("../db/config");

module.exports = {
  getAllProducers: async (req, res) => {
    let producers = await db.query("SELECT * FROM producer");
    res.status(200).send(producers.rows);
  },
};
