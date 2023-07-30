const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('whatsappClone', 'root', 'yeshraj85599', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize