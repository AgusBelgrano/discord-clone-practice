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
        const user = await userService.auth(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

module.exports = {
    create,
    getAll,
    auth
}

