const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.renderHome);
router.get('/productCart', mainController.renderProductCart);
router.get('/productDetail/:id', mainController.renderProductDetail);

module.exports = router;