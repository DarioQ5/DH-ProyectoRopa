const path = require('path');

const mainController = {
    renderHome: (req, res) => {
        res.render('index');
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