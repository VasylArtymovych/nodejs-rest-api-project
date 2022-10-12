const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const deleteById = async (contactId, owner) => {
  const contact = await Contact.findOneAndDelete(
    {
      _id: contactId,
      owner,
    },
    { projection: ["name email"] }
  );

  if (!contact) {
    throw RequestError(
      404,
      `Failure, contact with id: ${contactId} was not found`
    );
  }
  return contact;
};

module.exports = deleteById;
