const User = require("../models/user.model")

const UserRepository = {
    save: (user) => {
        return User.create(user)
    },
    findOne: async (email) => {
        const user = await User.findOne({ where: { email } }).then(user => {
            user.setDataValue("avatar", process.env.baseURL + user.previous("avatar"));
            return user.dataValues;
        });
        console.log(user);
        return user;
    },
}

module.exports = UserRepository;