const mysql = require('mysql2');

const dbConfig = {
    host: "127.0.0.1",
    user:"root",
    password: "",
    database: "master",
}

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
    if(error) console.log(error);
    console.log("Connected!")
})

module.exports = connection;
