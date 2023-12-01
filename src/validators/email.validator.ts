import Joi from 'joi';

function commonEmailValidator() {
  return Joi.string()
    .min(1)
    .max(254)
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .empty()
    .required()
    .lowercase()
    .messages({
      'string.base': 'Email should be a string.',
      'string.min': '',
      'string.max': '',
      'string.pattern.base': 'Invalid email format.',
      'string.empty': "Email can't be empty",
    });
}

export { commonEmailValidator };
