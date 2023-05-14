const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "master",
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: "localhost",
    port: 1433,
    dialect: "mssql",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => console.log("Unable to connect to the database", err));

module.exports = sequelize;
