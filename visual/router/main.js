const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.renderHome);
router.get('/login', mainController.renderLogin);
router.get('/productCart', mainController.renderProductCart);
router.get('/productDetail/:id', mainController.renderProductDetail);
router.get('/register', mainController.renderRegistration);

module.exports = router;