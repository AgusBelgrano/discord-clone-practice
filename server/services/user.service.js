const fs = require('fs');

const userList = [];
let nextId = 0;

const getAll = () => {
    let users = JSON.parse(fs.readFileSync("./server/database/users.json"));
    return users;
}

const create = (payload) => {
    nextId++;
    const { username, password, email } = payload;
    const user = {
        id: nextId,
        username,
        password,
        email
    };
    userList.push(user);
    fs.writeFileSync("./server/database/users.json", JSON.stringify(userList))
    return user
}

const auth = (payload) => {
    const { username, password } = payload;
    let logged;
    const users = JSON.parse(fs.readFileSync("./server/database/users.json"));
    if(username && password){
        for(let user of users){
            if(username === user.username && password === user.password){
                logged = user;
                break;
            }
        }
    }
    return logged;
}

module.exports = {
    create,
    getAll,
    auth
}