const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (data) => {
  const msg = {
    from: "yerimjunior@meta.ua",
    ...data,
  };

  await sgMail.send(msg);
  return true;
};

module.exports = sendMail;
