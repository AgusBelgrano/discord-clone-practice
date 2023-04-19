const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, userController.getAll);
router.post('/auth', userController.auth)
router.post('/register', userController.create);

module.exports = router;
