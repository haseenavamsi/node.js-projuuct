const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root','Haseena@9177' , {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
