const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const secret = process.env.SECRET;

const login = async (password, email) => {
  const user = await User.findOne({ email });

  if (
    !user ||
    !user.verify ||
    !(await bcrypt.compare(password, user.password))
  ) {
    throw RequestError(401, "Email or password is wrong or not verified.");
  }

  const token = await jwt.sign({ _id: user._id }, secret, {
    expiresIn: "1d",
  });

  await User.updateOne({ _id: user._id }, { $set: { token } });

  return {
    token,
  };
};

module.exports = login;
