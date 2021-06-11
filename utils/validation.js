const joi = require("joi");
// firstName, lastName, email, password;

const registerValidator = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(8),
});

const signinValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(8),
});

module.exports = {
  registerValidator,
  signinValidator,
};
