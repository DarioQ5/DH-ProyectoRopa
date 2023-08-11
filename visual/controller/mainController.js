const path = require('path');

const mainController = {
    renderHome: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    },
    renderLogin: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/login.html'));
    },
    renderProductCart: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    },
    renderProductDetail: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
    },
    renderRegister: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'));
    }
};

module.exports = mainController;