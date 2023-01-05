import joi from "joi";

export const clientSchema = joi.object({
    name:joi.string().trim().required(),
    address:joi.string().trim().required(),
    phone:joi.string().trim().required()
});