const { auth } = require("../../services");

const login = async (req, res) => {
  const { email, password } = req.body;
  const { token } = await auth.login(password, email);

  res.status(200).json({ token });
};

module.exports = login;
