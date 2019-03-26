const express = require('express')
const app = express();

// Set the template engine ejs
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

// Listening Port
server = app.listen(3000)

// Websocket Configuration
const io = require("socket.io")(server)

io.on('connection', (socket) => {
    console.log('New user connected')
})