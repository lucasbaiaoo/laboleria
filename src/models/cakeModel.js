import joi from "joi";

export const cakeSchema = joi.object({
    name:joi.string().trim().required(),
    price:joi.number().required(),
    image: joi.string().uri().trim().required(),
    description: joi.string().trim().required()
});