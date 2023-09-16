const fs = require('fs');
const path = require('path');

const products = path.join(__dirname, 'dataBase', 'productos.json');

const productos = require('../dataBase/productos.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    renderHome: (req, res) => {
        const productos = require('../dataBase/productos.json');
       
        res.render('index', {productos : productos});
    },
    renderLogin: (req, res) => {
        res.render('login');
    },
    renderProductCart: (req, res) => {
        res.render('productCart');
    },
    renderProductDetail: (req, res) => {
        const productSearch = productos.find((producto) => producto.id === req.params.id)
        res.render('productDetail', {products : productSearch});
    },
    renderRegistration: (req, res) => {
        res.render('registration');
    }
};

module.exports = mainController;