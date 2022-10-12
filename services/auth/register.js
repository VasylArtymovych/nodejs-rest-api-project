const { v4: uuidv4 } = require("uuid");
const { User } = require("../../models");
const { RequestError, sendMail } = require("../../helpers");

const { PORT } = process.env;

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

  await sendMail({
    to: email,
    subject: "Confirm your registration!",
    text: `Please confirm your email adress POST http://localhost:${PORT}/api/users/verify/${verificationToken}`,
    html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${verificationToken}">confirm your verification</a`,
  });

  return { email: newUser.email, subscription: newUser.subscription };
};

module.exports = register;
