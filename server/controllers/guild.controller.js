const guildService = require('./../services/guild.service')

const getAll = (req, res) => {
    res.send(guildService.getAll(req))
}

const create = (req, res) => {
    const guild = guildService.create(req.body);
    res.send(guild);
}

module.exports = {
    create,
    getAll,
}

