const mongoose = require("mongoose");
const gravatar = require("gravatar");
const { handleMongooseError, hashPassword } = require("../helpers");

const userShema = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email in use"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: { type: String, default: null },
    avatarURL: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: 250 }, true);
      },
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userShema.post("save", handleMongooseError);

userShema.pre("save", hashPassword);

const User = mongoose.model("User", userShema);

module.exports = {
  User,
};
