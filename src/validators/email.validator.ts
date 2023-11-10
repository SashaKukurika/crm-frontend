import Joi from 'joi';

function commonEmailValidator() {
  return Joi.string()
    .min(10)
    .max(254)
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .empty()
    .required()
    .lowercase()
    .messages({
      'string.base': 'Email should be a string.',
      'string.min': 'Email should have at least {#limit} characters.',
      'string.max': 'Email should not exceed {#limit} characters.',
      'string.pattern.base': 'Invalid email format.',
      'string.empty': "Email can't be empty",
    });
}

export { commonEmailValidator };
