const Colors = require("../models/Colors");

module.exports = {
  addNewColor: async (req, res) => {
    if (!req.body.name || !req.body.color_hex) {
      res.status(400).send("Missing data");
      return 0;
    }
    const color = await Colors.addNewColor({
      name: req.body.name,
      color_hex: req.body.color_hex,
    }).catch((e) => {
      console.log(e);
    });
    if (color) {
      res.status(200).send("Color added");
    } else {
      res.status(400).send("Error");
    }
  },
};
