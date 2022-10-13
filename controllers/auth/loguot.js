const { auth } = require("../../services");

const logout = async (req, res) => {
  const { _id } = req.user;
  await auth.logout(_id);

  res.status(200).json({ message: "success" });
};

module.exports = logout;
