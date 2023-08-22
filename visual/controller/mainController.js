const path = require('path');

const productos = require('../dataBase/productos')

const mainController = {
    renderHome: (req, res) => {
       
        res.render('index', {'productos': productos});
    },
    renderLogin: (req, res) => {
        res.render('login');
    },
    renderProductCart: (req, res) => {
        res.render('productCart');
    },
    renderProductDetail: (req, res) => {
        res.render('productDetail');
    },
    renderRegistration: (req, res) => {
        res.render('registration');
    }
};

module.exports = mainController;