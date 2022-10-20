const register = require("./register");
const login = require("../auth/login");
const logout = require("./loguot");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register,
  login,
  logout,
  verify,
  resendVerify,
};
