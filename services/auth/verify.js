const { User } = require("../../models");
const { RequestError, sendMail } = require("../../helpers");

const verify = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw RequestError(400, "Not Found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  await sendMail({
    to: user.email,
    subject: "Ferification success!",
    text: `Your registration was successfully`,
    html: `Your registration was successfully`,
  });

  return true;
};

module.exports = verify;
