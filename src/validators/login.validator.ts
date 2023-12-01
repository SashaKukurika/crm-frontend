import Joi from 'joi';

import { commonEmailValidator } from './email.validator';

const loginValidator = Joi.object({
  email: commonEmailValidator(),
  password: Joi.string().max(64).empty().required().messages({
    'string.max': '',
    'string.empty': "Password can't be empty",
  }),
});

export { loginValidator };
