const Address = require("../models/Address");
const Producer = require("../models/Producer");

module.exports = {
  addNewProducer: async (req, res) => {
    const payload = req.body;
    if (
      !payload.name ||
      !payload.description ||
      !payload.country ||
      !payload.city ||
      !payload.street ||
      !payload.apartmentNum ||
      !payload.postCode
    ) {
      res.status(400).send("Missing data");
      return 0;
    }
    let address = await Address.addNewAddess(
      payload.country,
      payload.city,
      payload.street,
      payload.apartmentNum,
      payload.postCode
    ).catch((e) => {
      console.log(e);
    });
    const producer = await Producer.addNewProducer({
      name: payload.name,
      description: payload.description,
      id_address: address.ID_ADDRESS,
    }).catch((e) => {
      console.log(e);
    });
    if (producer) {
      res.status(200).send("Producer added");
    } else {
      res.status(400).send("Error");
    }
  },
};
