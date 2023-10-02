// Requires! Modules
const { body, validationResult } = require('express-validator');
const path = require('node:path');
const fs = require('node:fs');
const data = require('../dataBase/users.json');

const arrRegister = [
    body('username').notEmpty().withMessage('Ingresar nombre de usuari@'),
    body('email').notEmpty().withMessage('Ingresar tu email').bail().isEmail().withMessage('Ingresar email válido'),
    body('password').notEmpty().withMessage('Ingresar contraseña')
];

const validateRegister = ( req, res, next) =>{

    const errors = validationResult(req);

    try{
        if(errors.isEmpty()){
            next()
    
        }else{
            throw errors
        }

    }catch(err){
        res.render('create',{
            errors: err.mapped(),
            old: req.body
        })
    }
}

module.exports = {
    arrRegister,
    validateRegister
}