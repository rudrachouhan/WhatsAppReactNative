const sequelize = require('../db')
const DataTypes = require('sequelize')

const createTable = (tableName) => {
    const User = sequelize.define(tableName, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sender: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.STRING,
        }
    })
    return User
}

module.exports = createTable

