const { contacts: operations } = require("../../services");

const add = async (req, res) => {
  const { _id: owner } = req.user;

  await operations.add(req.body, owner);

  res.status(201).json({ status: "success" });
};

module.exports = add;
