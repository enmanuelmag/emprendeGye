const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize(
  'emprendeGYE',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/*  'bj3jjfoucmmohfnsp9ex',
  'uv62h98qsbe8ztj1',
  'PFLNfd2EaW86JB9Cb3xy',
  {
    host: 'bj3jjfoucmmohfnsp9ex-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);*/