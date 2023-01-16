const db = require("../db/config");

module.exports = {
  addNewTransaction: async ({
    id_seller,
    id_buyer,
    id_product,
    id_delivery,
    id_payment,
  }) => {
    const date = new Date();
    const hours = ("00" + date.getHours()).slice(-2);
    const minutes = ("00" + date.getMinutes()).slice(-2);
    const seconds = ("00" + date.getSeconds()).slice(-2);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    let transaction = await db.query(
      `INSERT INTO transactions ("Date", "ID_SELLER", "ID_BUYER", "ID_PRODUCT", "ID_DELIVERY", "ID_PAYMENT") VALUES ($1, $2, $3, $4, $5, $6)`,
      [timestamp, id_seller, id_buyer, id_product, id_delivery, id_payment]
    );
    return transaction;
  },
};
