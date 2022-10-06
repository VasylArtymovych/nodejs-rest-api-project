const Joi = require("joi");

const userSchema = Joi.object({
  password: Joi.string().alphanum().min(5).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().allow("starter", "pro", "business"), // or pattern(/^(starter|pro|business)$/)
  token: Joi.string(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().pattern(/^(starter|pro|business)$/),
});

const verifySchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  userSchema,
  subscriptionSchema,
  verifySchema,
};
