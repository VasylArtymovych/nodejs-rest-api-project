module.exports = ["./api/contacts.js", "./api/users.js"].reduce((obj, file) => {
  const exp = require(file);
  Object.assign(obj, exp);
  return obj;
}, {});
