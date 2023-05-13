const { DataTypes } = require('sequelize');
const sequelize = require('../connections/connection');

const Guild = sequelize.define('Guild', {
    guildId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    icon: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    ownerId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    roles: {
        type: DataTypes.ARRAY(DataTypes.JSON),
    },
    emojis: {
        type: DataTypes.ARRAY(DataTypes.JSON),
    },
    approximateMemberCount: {
        type: DataTypes.INTEGER,
    },
    approximatePreseneceCount: {
        type: DataTypes.INTEGER,
    },
    preferredLocale: {
        type: DataTypes.STRING
    }
},{
    dialectOptions: {
        native: false,
        raw: true
    }
})

module.exports = Guild;