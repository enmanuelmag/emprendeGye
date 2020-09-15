const Sequelize = require("Sequelize");
const db = require("../database/db.js");
const emprendimiento = require("./emprendimiento");
const inversionista = require("./inversionista");

var empInversionista = db.sequelize.define(
    "emprendimientoinversionista",
    {
        idEmprendimientoInversionista: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idEmprendimiento: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        },
        idInversionista: {
            type: Sequelize.INTEGER,
            foreignKey: true,
        }
    },{ freezeTableName: true,timestamps: false}
)
/*
emprendimiento.hasOne(emprendimientoStats, {as: 'emprendimientostats',
foreignKey: "idEmprendimientoStats"});
*/
empInversionista.belongsTo(inversionista, {as: 'inversionista',
foreignKey: "idInversionista"});
empInversionista.belongsTo(emprendimiento, {as: 'emprendimiento',
foreignKey: "idEmprendimiento"});

module.exports = empInversionista;