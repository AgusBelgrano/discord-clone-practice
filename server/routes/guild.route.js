const router = require('express').Router();
const guildController = require('./../controllers/guild.controller');

router.get('/', guildController.getAll);
router.post('/create', guildController.create);

module.exports = router;
