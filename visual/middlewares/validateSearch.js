const {check ,  validationResult} = require('express-validator');

const arrValidate = [
    check('correo').notEmpty().withMessage('Debes completar')
];

const validationSearch = ( req, res, next ) =>{
    const errors = validationResult(req);

    console.log(errors.mapped())

    if(errors.isEmpty() === true){
        next();

    } else{
        res.render('index', {
            errors: errors.mapped()
        })
    }
}

module.exports = {
    arrValidate,
    validationSearch
}
