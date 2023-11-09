import Joi from 'joi';
// todo неможу через валідатор надсилати
const clientUpdateValidator = Joi.object({
  email: Joi.string()
    .max(254)
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .allow('')
    .messages({
      'string.base': 'Email should be a string.',
      'string.max': 'Email should not exceed {#limit} characters.',
      'string.pattern.base': 'Invalid email format.',
    }),
  name: Joi.string()
    .pattern(/^[a-zA-Zа-яА-ЯёіЁ]*$/)
    .max(20)
    .allow('')
    .messages({
      'string.max': 'Surname should not exceed {#limit} characters.',
    }),
  surname: Joi.string()
    .pattern(/^[a-zA-Zа-яА-ЯёіЁ]*$/)
    .max(35)
    .allow('')
    .messages({
      'string.max': 'Surname should not exceed {#limit} characters.',
    }),
  phone: Joi.string()
    .pattern(/^380\d{9}$/)
    .max(12)
    .messages({
      'string.pattern.base': 'Invalid phone number. Example: 380501234567',
    })
    .allow(''),
  age: Joi.number().integer().max(100).allow(null, '').messages({
    'number.max': 'Age should be up to {#limit}.',
  }),
  alreadyPaid: Joi.number().integer().max(1000000).allow(null).messages({
    'number.max': 'Already paid be up to {#limit}.',
  }),
  sum: Joi.number().integer().max(1000000).allow(null).messages({
    'number.max': 'Sum should be up to {#limit}.',
  }),
});

export { clientUpdateValidator };
