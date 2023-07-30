const createTable = require('../models/createTable')

const sendMessage = async (req, res) => {
    try {
        const body = req.body

        if (!body.senderId || !body.receiverId || !body.message) {
            return res.status(400).send('parameters required')
        }

        const sortedId = [body.senderId, body.receiverId].sort()
        const tableName = `${sortedId[0]}_${sortedId[1]}`
        const chatTable = createTable(tableName)
        await chatTable.sync()

        await chatTable.create({ sender: body.senderId, message: body.message })
        res.status(200).send('ok')

    } catch (error) {
        console.log(error)
    }
}

module.exports = { sendMessage }