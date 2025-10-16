const { DataTypes } = require('sequelize')
const { connection } = require('../config/connection')

const user = connection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,  
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
},
    {
        paranoid: true,
        freezeTableName: true,
    })

module.exports = user