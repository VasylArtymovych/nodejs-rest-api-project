const { User } = require("../../models");
const { RequestError, sendMail, createVerifyMail } = require("../../helpers");

const resendVerify = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(400, `User with email ${email} not found`);
  }
  if (!user.verificationToken) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = createVerifyMail(email, user.verificationToken);
  await sendMail(mail);

  return true;
};

module.exports = resendVerify;
