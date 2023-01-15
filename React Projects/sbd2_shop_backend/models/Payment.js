const db = require("../db/config");

module.exports = {
  addNewPayment: async ({ type, description }) => {
    let payment = await db.query(
      `INSERT INTO payment ("type", "description") VALUES ($1, $2)`,
      [type, description]
    );
    return payment;
  },
};
