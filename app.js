const express = require('express')
const app = express()

// Set the template engine ejs
app.set('view engine', 'ejs')

// Middleware
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Listening Port
server = app.listen(3000)