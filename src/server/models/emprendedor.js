const Sequelize = require("Sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    "emprendedor",
    {
        idEmprendedor: {
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
        },
        telefono: {
            type: Sequelize.STRING
        },
        correo: {
            type: Sequelize.STRING
        },
        nacimiento: {
            type: Sequelize.DATE
        }    
    },{ freezeTableName: true,timestamps: false}
    //{timestamps: false},

)