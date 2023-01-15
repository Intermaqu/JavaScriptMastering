const db = require("../db/config");

module.exports = {
  addNewProducer: async ({ name, description, id_address }) => {
    let producer = await db.query(
      `INSERT INTO producer ("Name", "Description", "ID_ADDRESS") values ($1, $2, $3)`,
      [name, description, id_address]
    );
    return producer;
  },
  getAllProducers: async (req, res) => {
    let producers = await db.query("SELECT * FROM producer");
    res.status(200).send(producers.rows);
  },
};
