const { users } = require("../../services");
const verify = async (req, res) => {
  const { verificationToken } = req.params;

  await users.verify(verificationToken);

  res.json({
    message: "Verify success",
  });
};

module.exports = verify;
