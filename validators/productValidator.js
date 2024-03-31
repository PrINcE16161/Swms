import Joi from 'joi';

const productSchema = Joi.object({
    distance: Joi.number().required(),
    binlevel: Joi.number().required(),
    angle: Joi.number().required(),
});

export default productSchema;