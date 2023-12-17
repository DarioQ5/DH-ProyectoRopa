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
    search: (req, res) => {
		const { keywords } = req.query

		const productsSearch = productos.filter(( product ) => product.name.toLowerCase().includes(keywords.toLowerCase()))

		res.render('search', { 
			results: productsSearch 
		})
	},
    renderProductCart: (req, res) => {
        res.render('productCart');
    },
    renderProductDetail: (req, res) => {
        const productSearch = productos.find((producto) => producto.id === req.params.id)
        res.render('productDetail', {products : productSearch});
    },
};

module.exports = mainController;