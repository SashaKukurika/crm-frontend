import Joi from 'joi';

const activateValidator = Joi.object({
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%^&*])'))
    .required()
    .empty()
    .messages({
      'string.base': 'Password should be a string',
      'string.min': 'Password should be at least {#limit} characters long',
      'string.max': 'Password should not exceed {#limit} characters',
      'string.pattern.base':
        'Weak password. Use both upper and lower case letters, numbers, and special characters',
      'string.empty': "Password can't be empty",
    }),

  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
  }),
});

export { activateValidator };
