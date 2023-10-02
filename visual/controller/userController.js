const fs = require('fs');
const path = require('path');
const products = path.join(__dirname, 'dataBase', 'users.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    render: (req, res) =>{
        res.render('index')
    },
    renderLogin: (req, res) => {
        res.render('login');
    },

    renderRegistration: (req, res) => {
        res.render('registration');
    },
    createUser: (req, res) =>{
        res.render('Usuario Registrado')
    }    
}

module.exports = userController;