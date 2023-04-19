const fs = require('fs');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateTag } = require('../utils/utils');

const getAll = () => {
    let users = JSON.parse(fs.readFileSync("./server/database/users.json"));
    return users;
}

const create = async (payload) => {

    const { username, password, email } = payload;
    
    try {

        const tag = await generateTag(username);

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword,
            userTag: tag
        });

        return newUser;

    } catch (error) {
        throw error;
    }
}

const auth = async (payload) => {

    const { email, password } = payload;

    try {
        const user = await User.findOne({ where: { email } });

        
        if (!user) {
            throw new Error('Email o contraseña incorrecto');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Email o contraseña incorrecto');
        }

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.PRIVATE_JWT_KEY
          );

        return {token, user};
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    auth
}