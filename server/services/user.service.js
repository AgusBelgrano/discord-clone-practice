const fs = require('fs');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const getAll = () => {
    let users = JSON.parse(fs.readFileSync("./server/database/users.json"));
    return users;
}

const create = async (payload) => {

    const { username, password, email } = payload;
    
    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword,
        });

        return newUser;

    } catch (error) {
        throw error;
    }
}

const auth = async (payload) => {

    const { username, password } = payload;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Contraseña incorrecta');
        }
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    auth
}