const { auth } = require("../../services");

const logout = async (req, res) => {
  const user = req.user;
  const result = await auth.logout(user._id);

  res.status(200).json({ message: "success" });
};

module.exports = logout;
