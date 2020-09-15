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
empInversionista.hasOne(emprendimiento, {as: 'emprendimiento',
foreignKey: "idEmprendimiento"});
empInversionista.hasOne(inversionista, {as: 'inversionista',
foreignKey: "idInversionista"});

module.exports = empInversionista;