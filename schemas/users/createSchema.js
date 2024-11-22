import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).required().min(3).alphanum().messages({
        'string.base':'Do not use numbers',
        'string.pattern.base':'"name" Do not use numbers and use special characters',
        'string.min':'"name" Must be a minimum of 3 characters'
    }),
    surname: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).alphanum().min(3).messages({
        'string.base':'Do not use numbers',
        'string.pattern.base':'"surname" Do not use numbers and use special characters',
        'string.min':'"name" Must be a minimum of 3 characters'
    }),
    email: joi.string().required(),
    photo: joi.string().required(),
    country: joi.string().required().alphanum().min(3).messages({
        'string.base':'Do not use numbers',
        'string.alphanum':'Do not use special characters',
        'string.min':'"name" Must be a minimum of 3 characters'
    }),
    role: joi.string().required().min(3).alphanum().messages({
        'string.base':'Do not use numbers',
        'string.alphanum':'Do not use special characters',
        'string.min':'"name" Must be a minimum of 3 characters'
    }),
    password: joi.string().required()
})

export default schema