const { Sequelize } = require('sequelize');

const connection = new Sequelize('auth_api', 'postgres', 'postgres', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
})

module.exports = { connection }