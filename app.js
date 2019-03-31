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
    // Default username
    socket.username = "Anonymous"
    // Custom username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })
    // Listen and broadcast new message
    socket.on('new_message', data => {
        io.sockets.emit('new_message', {message: data.message, username: socket.username})
    });

    // Listen for keystrokes
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', {
            username: socket.username
        })
    })

})