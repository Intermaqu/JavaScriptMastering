const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  registerNewUser: async (req, res) => {
    const {
      name,
      surname,
      gender,
      email,
      password,
      country,
      city,
      street,
      apartmentNum,
      postCode,
    } = req.body;

    if (
      !name ||
      !surname ||
      !gender ||
      !email ||
      !password ||
      !country ||
      !city ||
      !street ||
      !apartmentNum ||
      !postCode
    ) {
      res.status(400).send("Missing data!");
      return 0;
    }
    if (await User.getUserByEmail(email)) {
      res.status(401).send("Email exists");
      return 0;
    }
    let address = await Address.addNewAddess(
      country,
      city,
      street,
      apartmentNum,
      postCode
    );
    console.log(address);
    await User.addNewUser(
      name,
      surname,
      gender,
      email,
      password,
      address.ID_ADDRESS
    );
    res.status(200).send("User Created");
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Missing data");
      return 0;
    }
    let user = await User.getUserByEmail(email);
    if (!user) {
      res.status(401).send("User not found");
      return 0;
    }
    if (password !== user.Password) {
      res.status(401).send("Wrong password");
      return 0;
    }
    let address = await Address.getAddressById(user.ID_ADDRESS);
    console.log(address);
    console.log(user);
    const token = User.generateJWTToken(
      user.ID_USER,
      user.Name,
      user.Surname,
      user.Email,
      user.Gender,
      "",
      address.Country,
      address.City,
      address.Street,
      address.Appartment,
      address.Postal_Code
    );

    const newUser = { ...user, Password: "", ...address };

    res.status(200).send({
      userData: newUser,
      token: "Bearer " + token,
    });
  },
};
