const createTable = require('../models/createTable')

const getChatById = async (req, res) => {
    const id = req.params.id
    // const [results] = await sequelize.query(`SELECT * FROM ${id}`)
    const chatTable = createTable(id)
    await chatTable.sync()

    const messages = await chatTable.findAll()
    res.send(messages)
}

module.exports = { getChatById }