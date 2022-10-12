const { contacts: operations } = require("../../services");

const getById = async (req, res) => {
  const { _id: owner } = req.user;
  const contactId = req.params.contactId;

  const contact = await operations.getById(contactId, owner);

  res.status(200).json({ status: "success", contact });
};

module.exports = getById;
