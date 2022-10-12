const { Contact } = require("../../models");

const getAll = async (owner, skip, limit, rest) => {
  const contacts = await Contact.find(
    { owner, ...rest },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

  return contacts;
};

module.exports = getAll;
