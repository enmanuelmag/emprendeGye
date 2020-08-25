const Sequelize = require("Sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    "emprendedorcuenta",
    {
        idEmprendedorCuenta: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario: {
            type: Sequelize.STRING
        },
        contraseña: {
            type: Sequelize.STRING
        },
        idEmprendedor: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        },   
    },{ freezeTableName: true,timestamps: false}
    //{timestamps: false},

)