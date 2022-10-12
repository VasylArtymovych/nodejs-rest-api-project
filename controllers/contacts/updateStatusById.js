const { contacts: operations } = require("../../services");

const updateStatusById = async (req, res) => {
  const { _id: owner } = req.user;
  const contactId = req.params.contactId;
  const { favorite } = req?.body;

  const updatedContact = await operations.updateStatusById(
    contactId,
    favorite,
    owner
  );

  res.status(200).json({ status: "success", updatedContact });
};

module.exports = updateStatusById;
