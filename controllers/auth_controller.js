const jwt = require("jsonwebtoken");
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

const login = (req, res) => {
  // set jwt to cookies
  const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
  // res.cookies("jwt", token);
  res.json(token);
};

module.exports = {
  register,
  login
};
