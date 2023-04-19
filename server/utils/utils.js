const sequelize = require("../connections/connection")

const generateTag = async (username) => {
    const users = await sequelize.query("SELECT * FROM [master].[dbo].[Users]");
    const number = users.length;
    const tag = `${username}#${number}`;
    return tag;
}

module.exports = {
    generateTag
}