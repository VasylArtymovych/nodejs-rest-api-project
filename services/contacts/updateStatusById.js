const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const updateStatusById = async (contactId, favorite, owner) => {
  const contact = await Contact.findOneAndUpdate(
    {
      _id: contactId,
      owner,
    },
    {
      $set: { favorite },
    },
    { projection: { favorite: 1 }, new: true }
  );

  if (!contact) {
    throw RequestError(
      404,
      `Failure, contact with id: ${contactId} was not found`
    );
  }
  return contact;
};

module.exports = updateStatusById;
