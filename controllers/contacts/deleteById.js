const { contacts: operations } = require("../../services");

const deleteById = async (req, res) => {
  const { _id: owner } = req.user;
  const contactId = req.params.contactId;

  const contact = await operations.deleteById(contactId, owner);

  res.status(200).json({ status: "success", contact });
};

module.exports = deleteById;
