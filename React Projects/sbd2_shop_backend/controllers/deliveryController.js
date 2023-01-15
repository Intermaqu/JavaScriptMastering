const Delivery = require("../models/Delivery");

module.exports = {
  addNewDelivery: async (req, res) => {
    const payload = req.body;
    if (!payload.company_name || !payload.type || !payload.price) {
      res.status(400).send("Missing data");
      return 0;
    }
    const delivery = await Delivery.addNewDelivery({
      company_name: payload.company_name,
      type: payload.type,
      price: payload.price,
    }).catch((e) => {
      console.log(e);
    });
    if (delivery) {
      res.status(200).send("Delivery added");
    } else {
      res.status(400).send("Error");
    }
  },
  getAllDelivery: async (req, res) => {
    const delivery = await Delivery.getAllDelivery().catch((e) =>
      console.log(e)
    );
    console.log(delivery);
    if (delivery) {
      res.status(200).send(delivery);
    } else {
      res.status(400).send("Error");
    }
  },
};
