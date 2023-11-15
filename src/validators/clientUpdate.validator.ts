import Joi from 'joi';

const clientUpdateValidator = Joi.object({
  email: Joi.string()
    .max(100)
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .lowercase()
    .allow('')
    .messages({
      'string.pattern.base': 'Invalid email format.',
    }),
  name: Joi.string()
    .pattern(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]*$/)
    .max(25)
    .allow('')
    .messages({
      'string.base': 'Name should be a string.',
      'string.pattern.base': 'Name must not contain special characters or digits.',
      'string.max': 'Name should not exceed {#limit} characters.',
    }),
  surname: Joi.string()
    .pattern(/^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії]*$/)
    .max(30)
    .allow('')
    .messages({
      'string.base': 'Surname should be a string.',
      'string.pattern.base': 'Surname must not contain special characters or digits.',
      'string.max': 'Surname should not exceed {#limit} characters.',
    }),
  phone: Joi.string()
    .pattern(/^(\+?380\d{9})|(0\d{9})|(\d{9})$/)
    .max(12)
    .allow('')
    .messages({
      'string.base': 'Email should be a string.',
      'string.pattern.base': 'Invalid phone format. Example: 380932922314/+380932922314/0932922314',
    }),
  age: Joi.number().integer().min(16).max(90).allow(null, NaN).messages({
    'number.max': 'Not older {#limit}.',
    'number.min': 'Not younger {#limit}.',
  }),
  alreadyPaid: Joi.number().integer().min(1).max(1_000_000).allow(null, NaN).messages({
    'number.max': 'Not more {#limit}.',
    'number.min': 'Not less {#limit}.',
  }),
  sum: Joi.number().integer().min(1).max(1_000_000).allow(null, NaN).messages({
    'number.max': 'Not more {#limit}.',
    'number.min': 'Not less {#limit}.',
  }),
  group: Joi.string().allow(''),
  course: Joi.string().allow(''),
  course_format: Joi.string().allow(''),
  course_type: Joi.string().allow(''),
  status: Joi.string().allow(''),
});

export { clientUpdateValidator };
