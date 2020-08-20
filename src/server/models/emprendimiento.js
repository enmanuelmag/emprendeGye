const Sequelize = require("Sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    "emprendimiento",
    {
        idEmprendimiento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: Sequelize.STRING
        },
        sectoEconomico: {
            type: Sequelize.STRING
        },   
        idEmprendedor: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        },   
        idEmprendimientoStats: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        },   
    },{ freezeTableName: true,timestamps: false}
)