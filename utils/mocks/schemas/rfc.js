const joi = require('@hapi/joi');

const rfcIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const rfcApellidoSchema = joi.string().min(3);
const rfcDniSchema = joi.number().min(8).max(10).integer();
const rfcNombreSchema = joi.string().min(3).max(35);

const createRfcSchema = {
    apellido: rfcApellidoSchema.required(),
    dni: rfcDniSchema.required(),
    nombre:rfcNombreSchema.required()
}

const updateRfcSchema = {
    apellido: rfcApellidoSchema,
    dni: rfcDniSchema,
    nombre: rfcNombreSchema
}

module.exports = {
    createRfcSchema,
    updateRfcSchema,
    rfcIdSchema
}