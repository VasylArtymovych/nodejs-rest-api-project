const bcrypt = require("bcrypt");

async function hashPassword(next) {
  if (this.isNew || this.isModified) {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

module.exports = hashPassword;
