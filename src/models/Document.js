const Sequelize = require("sequelize");
const db = require("../config/db.js");
const User = require("../models/User.js")

const Document = db.define(
    "documents",
    {
        // Define attributes
        file: Sequelize.STRING,
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        id_user: Sequelize.INTEGER,
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },

    },
    {
        // Freeze Table Name
        freezeTableName: true,
        timestamps: false,
    }
);

Document.belongsTo(User, { foreignKey: 'id_user' })

module.exports = Document;
