const Guild = require('./../models/guild.model');

const getByUser = async (id) => {
    const guilds = await Guild.findAll({ where: { ownerId: id } });
    return guilds;
}

const create = async (payload) => {
    const guild = payload;
    console.log(guild);
}

module.exports = {
    getByUser,
    create
}

