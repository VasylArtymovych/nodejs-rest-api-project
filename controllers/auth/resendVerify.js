const { auth } = require("../../services");

const resendVerify = async (req, res, next) => {
  const { email } = req.body;
  await auth.resendVerify(email);
  res.json({ message: "Verification email sent" });
};

module.exports = resendVerify;
