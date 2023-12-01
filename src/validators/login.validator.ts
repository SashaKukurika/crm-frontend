import Joi from 'joi';

import { commonEmailValidator } from './email.validator';

const loginValidator = Joi.object({
  email: commonEmailValidator(),
  password: Joi.string().min(5).max(64).empty().required().messages({
    'string.base': 'Password should be a string.',
    'string.min': '',
    'string.max': '',
    'string.empty': "Password can't be empty",
  }),
});

export { loginValidator };
