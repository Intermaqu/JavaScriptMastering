const db = require("../db/config");

module.exports = {
  addNewDelivery: async ({ company_name, type, price }) => {
    let delivery = await db.query(
      `INSERT INTO delivery ("company_name", "type", "price") VALUES ($1, $2, $3)`,
      [company_name, type, price]
    );
    return delivery;
  },
};
