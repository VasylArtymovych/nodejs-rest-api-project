const { users } = require("../../services");

const reVerify = async (req, res, next) => {
  const { email } = req.body;
  await users.reVerify(email);
  res.json({ message: "Verification email sent" });
};

module.exports = reVerify;
