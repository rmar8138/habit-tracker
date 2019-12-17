const UserModel = require("../database/models/user_model");

const register = async (req, res) => {
  const { email, password } = req.body;

  // save user to db

  try {
    const user = await UserModel.create({ email, password });

    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  register
};
