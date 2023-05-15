const Sequelize = require("sequelize");
const db = require("../config/db.js");

const User = db.define(
    "users",
    {
        // Define attributes
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        role: Sequelize.ENUM('admin', 'user'),
    },
    {
        // Freeze Table Name
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = User;
