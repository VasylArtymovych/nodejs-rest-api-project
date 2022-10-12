const { auth } = require("../../services");

const register = async (req, res) => {
  const result = await auth.register(req.body);

  res.status(201).json({ status: "Created", user: result });
};

module.exports = register;
