import Joi from 'joi';

import { commonEmailValidator } from './email.validator';

const loginValidator = Joi.object({
  email: commonEmailValidator(),
  password: Joi.string().min(5).max(64).required().messages({
    'string.base': 'Password should be a string.',
    'string.min': 'Password should have at least {#limit} characters.',
    'string.max': 'Password should not exceed {#limit} characters.',
  }),
});

export { loginValidator };
