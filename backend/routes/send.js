const express = require('express')
const { sendMessage } = require('../controllers/send')
const router = express.Router()

router.post('/', sendMessage)

module.exports = router