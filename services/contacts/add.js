const { Contact } = require("../../models");

const add = async (body, owner) => {
  const user = new Contact({ ...body, owner });
  await user.save();
  // await Contact.insertOne({...body, owner: userId});
};

module.exports = add;
