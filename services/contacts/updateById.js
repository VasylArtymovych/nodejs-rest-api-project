const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const updateById = async (contactId, body, owner) => {
  const contact = await Contact.findOneAndUpdate(
    {
      _id: contactId,
      owner,
    },
    {
      $set: { ...body },
    },
    { projection: { owner: false, createdAt: 0, updatedAt: 0 }, new: true }
  );

  if (!contact) {
    throw RequestError(
      404,
      `Failure, contact with id: ${contactId} was not found`
    );
  }
  return contact;
};

module.exports = updateById;
