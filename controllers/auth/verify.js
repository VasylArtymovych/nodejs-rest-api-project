const { auth } = require("../../services");
const verify = async (req, res) => {
  const { verificationToken } = req.params;

  await auth.verify(verificationToken);

  res.json({
    message: "Verification success",
  });
};

module.exports = verify;
