const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = jwt.sign({ id: user._id, name: user.name }, "jwtsecret", {
    expiresIn: "30d",
  });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token });
};

const login = async (req, res) => {
  res.send("user login");
};

module.exports = {
  register,
  login,
};
