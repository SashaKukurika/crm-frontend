import Joi from 'joi';

import { commonEmailValidator } from './email.validator';

const createUserValidator = Joi.object({
  email: commonEmailValidator(),
  name: Joi.string()
    .pattern(/^[a-zA-Zа-яА-Я\s]*$/)
    .min(1)
    .max(25)
    .empty()
    .required()
    .messages({
      'string.pattern.base': 'Name must not contain special characters or digits',
      'string.min': 'Name should have at least {#limit} characters.',
      'string.max': 'Name should not exceed {#limit} characters.',
      'string.empty': "Name can't be empty",
    }),
  surname: Joi.string()
    .pattern(/^[a-zA-Zа-яА-Я\s]*$/)
    .min(1)
    .max(30)
    .empty()
    .required()
    .messages({
      'string.pattern.base': 'Surname must not contain special characters or digits',
      'string.min': 'Surname should have at least {#limit} characters.',
      'string.max': 'Surname should not exceed {#limit} characters.',
      'string.empty': "Surname can't be empty",
    }),
});

export { createUserValidator };
