import Joi from 'joi';

const commentValidator = Joi.object({
  text: Joi.string().min(1).max(100).required().messages({
    'string.min': 'Comment should have at least {#limit} characters.',
    'string.max': 'Comment should not exceed {#limit} characters.',
  }),
});

export { commentValidator };
