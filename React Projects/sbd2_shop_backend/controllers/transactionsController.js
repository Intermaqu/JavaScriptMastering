const Transactions = require("../models/Transactions");

module.exports = {
  addNewTransaction: async (req, res) => {
    const payload = req.body;
    if (
      !payload.user_id ||
      !payload.product_id ||
      !payload.quantity ||
      !payload.total_price
    ) {
      res.status(400).send("Missing data");
      return 0;
    }
    const transaction = await Transactions.addNewTransaction({
      date: new Date(),
      user_id: payload.user_id,
      product_id: payload.product_id,
      quantity: payload.quantity,
      total_price: payload.total_price,
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
