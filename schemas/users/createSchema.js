import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
        'string.base':'Do not use numbers',
        'string.alphanum':'Do not use special characters'
    }),
    surname: joi.string().alphanum().messages({
        'string.base':'Do not use numbers',
        'string.alphanum':'Do not use special characters'
    }),
    email: joi.string().required(),
    photo: joi.string().required(),
    country: joi.string().alphanum().messages({
        'string.base':'Do not use numbers',
        'string.alphanum':'Do not use special characters'
    }),
    role: joi.string().required().alphanum().messages({
        'string.base':'Do not use numbers',
        'string.alphanum':'Do not use special characters'
    }),
    password: joi.string().required()
})

export default schema