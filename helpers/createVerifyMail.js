const { BASE_URL } = process.env;

const createVerifyMail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Confirm your registration!",
    text: `Please confirm your email adress POST ${BASE_URL}/api/auth/verify/${verificationToken}`,
    html: `<p>Please click on link to ferify ypur registration: <a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">confirm your verification</a></p>`,
  };
  return mail;
};

module.exports = createVerifyMail;
