const Transactions = require("../models/Transactions");

module.exports = {
  addNewTransaction: async (req, res) => {
    const payload = req.body;
    if (
      !payload.id_seller ||
      !payload.id_buyer ||
      !payload.id_product ||
      !payload.id_delivery ||
      !payload.id_payment
    ) {
      res.status(400).send("Missing data");
      return 0;
    }
    const transaction = await Transactions.addNewTransaction({
      date: new Date(),
      id_seller: payload.id_seller,
      id_buyer: payload.id_buyer,
      id_product: payload.id_product,
      id_delivery: payload.id_delivery,
      id_payment: payload.id_payment,
    }).catch((e) => {
      console.log(e);
    });
    if (transaction) {
      res.status(200).send("Transaction added");
    } else {
      res.status(400).send("Error");
    }
  },
};
