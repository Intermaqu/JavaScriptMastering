const db = require("../db/config");

module.exports = {
  addNewTransaction: async ({
    date = new Date(),
    id_seller,
    id_buyer,
    id_product,
    id_delivery,
    id_payment,
  }) => {
    let transaction = await db.query(
      `INSERT INTO transaction ("date", "ID_SELLER", "ID_BUYER", "ID_PRODUCT", "ID_DELIVERY", "ID_PAYMENT") VALUES ($1, $2, $3, $4, $5, $6)`,
      [date, id_seller, id_buyer, id_product, id_delivery, id_payment]
    );
    return transaction;
  },
};
