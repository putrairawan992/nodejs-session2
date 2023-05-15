require('dotenv').config()
const Sequelize = require("sequelize");

const db = new Sequelize(
    process.env.SQL_DBNAME,
    process.env.SQL_USERNAME,
    process.env.SQL_PASSWORD,
    {
        host: process.env.SQL_HOST ? process.env.SQL_HOST : "localhost",
        dialect: process.env.SQL_DRIVER ? process.env.SQL_DRIVER : "mssql",
        // dialectOptions: {
        //     socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
        // }
    }
);

module.exports = db;