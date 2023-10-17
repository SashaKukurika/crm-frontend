import Joi from 'joi';

const loginValidator = Joi.object({
  email: Joi.string()
    .min(10)
    .max(254)
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .messages({
      'string.base': 'Email should be a string.',
      'string.min': 'Email should have at least {#limit} characters.',
      'string.max': 'Email should not exceed {#limit} characters.',
      'string.pattern.base': 'Invalid email format.',
    }),
  password: Joi.string().min(5).max(64).required().messages({
    'string.base': 'Password should be a string.',
    'string.min': 'Password should have at least {#limit} characters.',
    'string.max': 'Password should not exceed {#limit} characters.',
  }),
});

export { loginValidator };
