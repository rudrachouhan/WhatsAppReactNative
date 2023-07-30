const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const app = express()
const http = require('http');
const server = http.createServer(app);
const createTable = require('./models/createTable')
const { Server } = require("socket.io");
const io = new Server(server);

const chatRouter = require('./routes/chat')
const sendRouter = require('./routes/send')

//middleware

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));

// socket implementation

io.on('connection', socket => {
    socket.on('send message', ({ message, sender }) => {
        socket.broadcast.emit('receive message', {message, sender})
    })
})

// routes

app.use('/chat', chatRouter)
app.use('/send', sendRouter)

server.listen(5000)