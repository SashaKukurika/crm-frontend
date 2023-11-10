import Joi from 'joi';

// todo неможу через валідатор надсилати

// const clientUpdateValidator = Joi.object({
//   email: Joi.string()
//     .max(254)
//     .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
//     .lowercase()
//     .required()
//     .messages({
//       'string.base': 'Email should be a string.',
//       'string.max': 'Email should not exceed {#limit} characters.',
//       'string.pattern.base': 'Invalid email format.',
//     }),
//   name: Joi.string()
//     .pattern(/^[a-zA-Zа-яА-ЯёіЁ]*$/)
//     .max(20)
//     .required()
//     .messages({
//       'string.base': 'Email should be a string.',
//       'string.max': 'Surname should not exceed {#limit} characters.',
//     }),
//   surname: Joi.string()
//     .pattern(/^[a-zA-Zа-яА-ЯёіЁ]*$/)
//     .max(35)
//     .required()
//     .messages({
//       'string.base': 'Email should be a string.',
//       'string.max': 'Surname should not exceed {#limit} characters.',
//     }),
//   phone: Joi.string()
//     .pattern(/^380\d{9}$/)
//     .max(12)
//     .allow('')
//     .messages({
//       'string.base': 'Email should be a string.',
//       'string.pattern.base': 'Invalid phone number. Example: 380501234567',
//     }),
//   age: Joi.number().integer().min(16).max(100).allow(null, '', number).messages({
//     'number.max': 'Age should be up to {#limit}.',
//   }),
//   alreadyPaid: Joi.number().integer().min(1).max(1000000).allow(null, '', number).messages({
//     'number.max': 'Already paid be up to {#limit}.',
//   }),
//   sum: Joi.number().integer().min(1).max(1000000).allow(null, '', number).messages({
//     'number.max': 'Sum should be up to {#limit}.',
//   }),
// });

const clientUpdateValidator = Joi.object({
  email: Joi.string(),
  name: Joi.string(),
  surname: Joi.string(),
  phone: Joi.string(),
  age: Joi.number(),
  alreadyPaid: Joi.number(),
  // .custom((value) => {
  //   console.log(Number(value));
  //   return Number(value);
  // }),
  sum: Joi.number(),
});

// const clientUpdateValidator = Joi.object({
//   name: Joi.string()
//     .pattern(/^[a-zA-Zа-яА-ЯёіЁ]*$/)
//     .max(20)
//     .message('The field cannot contain special characters')
//     .required(),
//   surname: Joi.string()
//     .pattern(/^[a-zA-Zа-яА-ЯёіЁ]*$/)
//     .max(35)
//     .message('The field cannot contain special characters')
//     .required(),
//   email: Joi.string().max(254).email().message('Invalid email').required(),
//   phone: Joi.string()
//     .pattern(/^380\d{9}$/)
//     .max(12)
//     .message('Invalid phone number. Example: 380501234567')
//     .allow(''),
//   age: Joi.number().integer().min(16).max(90).allow(null),
//   alreadyPaid: Joi.number().integer().min(1).max(2147483647).allow(null),
//   sum: Joi.number().integer().min(1).max(2147483647).allow(null),
// });

export { clientUpdateValidator };
