const userService = require("../services/user.service");

const getAll = (req, res) => {
    res.send(userService.getAll());
}

const create = (req, res) => {
    const user = userService.create(req.body);
    res.send(user);
}

const auth = (req, res) => {
    const user = userService.auth(req.body);
    if (!user) {
        res.status(400).send(user);
    }
    res.send(user);
}

module.exports = {
    create,
    getAll,
    auth
}

