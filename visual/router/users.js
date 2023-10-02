const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

/* ---Middleware--- */
const validateAdmin = require('../middlewares/validateAdmin');
const upload = require('../middlewares/multer');

/* ---Validacion--- */
const { arrValidate, validationSearch } = require('../middlewares/validateSearch');
const { arrRegister, validateRegister } = require('../middlewares/validateRegister');

router.get('/', arrValidate, validationSearch, validateAdmin, userController.render);
router.get('/login/:id', userController.renderLogin);

router.get('/register', userController.renderRegistration);
router.post('/register',upload.single('avatar'), arrRegister, validateRegister, userController.createUser);

module.exports = router;