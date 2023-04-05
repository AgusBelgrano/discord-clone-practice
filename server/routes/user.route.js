const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.post('/auth', userController.auth)
router.post('/register', userController.create);

module.exports = router;
