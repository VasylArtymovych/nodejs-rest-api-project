const { auth } = require("../../services");

const logout = async (req, res) => {
  const user = req.user;
  await auth.logout(user._id);

  res.status(204).json({});
};

module.exports = logout;
