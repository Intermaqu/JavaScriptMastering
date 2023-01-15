const Payment = require("../models/Payment");

module.exports = {
  addNewPayment: async (req, res) => {
    const payload = req.body;
    if (!payload.type || !payload.description) {
      res.status(400).send("Missing data");
      return 0;
    }
    const payment = await Payment.addNewPayment({
      type: payload.type,
      description: payload.description,
    }).catch((e) => {
      console.log(e);
    });
    if (payment) {
      res.status(200).send("Payment added");
    } else {
      res.status(400).send("Error");
    }
  },
  getAllPayment: async (req, res) => {
    const payment = await Payment.getAllPayment().catch((e) => console.log(e));
    console.log(payment);
    if (payment) {
      res.status(200).send(payment);
    } else {
      res.status(400).send("Error");
    }
  },
};
