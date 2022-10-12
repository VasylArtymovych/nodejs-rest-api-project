const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const getById = async (contactId, owner) => {
  const contact = await Contact.findOne({ _id: contactId, owner }).populate(
    "owner",
    "email subscription avatarURL"
  );

  if (!contact) {
    throw RequestError(
      404,
      `Failure, contact with id: ${contactId} was not found`
    );
  }
  return contact;
};

module.exports = getById;
