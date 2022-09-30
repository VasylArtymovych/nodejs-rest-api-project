const { v4: uuidv4 } = require("uuid");
const { User } = require("../../models");
const { RequestError, sendMail } = require("../../helpers");

const register = async ({ password, email, subscription }) => {
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, `Email ${email} in use.`);
  }

  const verificationToken = uuidv4();
  const newUser = new User({
    password,
    email,
    subscription,
    verificationToken,
  });
  await newUser.save();

  await sendMail({
    to: email,
    subject: "Confirm registration!",
    text: `Please confirm your email adress POST http://localhost:3030/api/users/verify/${verificationToken}`,
    html: `<a target="_blank" href="http://localhost:3030/api/users/verify/${verificationToken}"></a`,
  });
  console.log("email sent");

  return newUser;
};

module.exports = register;
