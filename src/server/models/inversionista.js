const Sequelize = require("Sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    "inversionista",
    {
        idInversionista: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombres: {
            type: Sequelize.STRING
        },
        apellidos: {
            type: Sequelize.STRING
        },
        cedula: {
            type: Sequelize.STRING
        }
    },{ freezeTableName: true,timestamps: false}
    //{timestamps: false},

)