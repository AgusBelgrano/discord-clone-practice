const router = require('express').Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const blockMiddleware = require('../middlewares/block.middleware');

router.get('/', authMiddleware, userController.getAll);
router.post('/auth', blockMiddleware, userController.auth)
router.post('/register', userController.create);

module.exports = router;
