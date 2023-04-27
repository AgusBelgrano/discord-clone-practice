const User = require("../models/user.model")

const UserRepository = {
    save: (user) => {
        return User.create(user)
    },
    findOne: (id) => {
        return User.findOne(id);
    },
}

module.exports = UserRepository;