const yup =require('yup');


function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body);

            next();
        } catch (error) {
            next(new ValidationError(error));
        }
    };
}

function createUsersValidation(data) {
    const schema = yup.object().shape({
        nombre: yup.string().min(3).matches(/^[a-z]+$/),
        dni: yup.number().min(8).max(8).integer().required(),
        apellido: yup.string().min(3).matches(/^[a-z]+$/).required(),
    });

    schema.validateSync(data);
}

module.exports = {
    validate,
    createUsersValidation,
};

