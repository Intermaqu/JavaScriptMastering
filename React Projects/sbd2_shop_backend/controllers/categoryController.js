const Category = require("../models/Category");

module.exports = {
  addNewCategory: async (req, res) => {
    const payload = req.body;
    if (!payload.name || !payload.description) {
      res.status(400).send("Missing data");
      return 0;
    }
    const category = await Category.addNewCategory({
      name: payload.name,
      description: payload.description,
    }).catch((e) => {
      console.log(e);
    });
    if (category) {
      res.status(200).send("Category added");
    } else {
      res.status(400).send("Error");
    }
  },
};
