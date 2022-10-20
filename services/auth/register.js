const { v4: uuidv4 } = require("uuid");
const { User } = require("../../models");
const { RequestError, sendMail, createVerifyMail } = require("../../helpers");

const register = async ({ password, email, subscription }) => {
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, `Email ${email} in use.`);
  }

  const verificationToken = uuidv4();
  const newUser = await User.create({
    password,
    email,
    subscription,
    verificationToken,
  });

  const mail = createVerifyMail(email, verificationToken);
  await sendMail(mail);

  return { email: newUser.email, subscription: newUser.subscription };
};

module.exports = register;
