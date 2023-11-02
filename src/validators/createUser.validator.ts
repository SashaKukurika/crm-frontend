import Joi from 'joi';

import { commonEmailValidator } from './email.validator';

const createUserValidator = Joi.object({
  email: commonEmailValidator(),
  name: Joi.string().min(1).max(25).empty().required().messages({
    'string.min': 'Name should have at least {#limit} characters.',
    'string.max': 'Name should not exceed {#limit} characters.',
    'string.empty': "Name can't be empty",
  }),
  surname: Joi.string().min(1).max(25).empty().required().messages({
    'string.min': 'Surname should have at least {#limit} characters.',
    'string.max': 'Surname should not exceed {#limit} characters.',
    'string.empty': "Surname can't be empty",
  }),
});

export { createUserValidator };
