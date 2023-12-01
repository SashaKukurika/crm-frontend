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
      'string.min': '',
      'string.max': '',
      'string.pattern.base': '',
      'string.empty': "Email can't be empty",
    });
}

export { commonEmailValidator };
