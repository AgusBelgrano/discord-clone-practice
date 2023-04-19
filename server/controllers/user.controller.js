const userService = require("../services/user.service");

const getAll = (req, res) => {
    res.send(userService.getAll());
}

const create = (req, res) => {
    const user = userService.create(req.body);
    res.send(user);
}

const auth = async (req, res) => {
    try {
        const authResponse = await userService.auth(req.body);
        res.status(200).json(authResponse);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    create,
    getAll,
    auth
}

