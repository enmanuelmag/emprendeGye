const Sequelize = require("Sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
    "emprendimientostats",
    {
        idEmprendimientoStats: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fundacion: {
            type: Sequelize.DATE,
        },
    },{ freezeTableName: true,timestamps: false}
)