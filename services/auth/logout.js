const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const logout = async (id) => {
  const user = await User.findByIdAndUpdate(id, { token: "" });

  if (!user) {
    throw RequestError(401, "Email or password is wrong.");
  }

  return true;
};

module.exports = logout;
