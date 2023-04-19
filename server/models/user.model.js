const { DataTypes } = require('sequelize');
const sequelize = require('../connections/connection');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    }    
},{
    dialectOptions: {
        native: false,
        raw: true
    }
})

module.exports = User;