const { contacts: operations } = require("../../services");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  let { page = 1, limit = 10, ...rest } = req.query;

  const skip = (parseInt(page) - 1) * limit;
  limit = parseInt(limit) > 20 ? 20 : limit;

  const contacts = await operations.getAll(owner, skip, limit, rest);

  res.status(200).json({ contacts, page, limit });
};

module.exports = getAll;
