const express = require('express')
const { getChatById } = require('../controllers/chat')
const router = express.Router()

router.get('/:id', getChatById)

module.exports = router