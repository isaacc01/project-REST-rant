//MODULES
require('dotenv').config()
const express = require('express')
const app = express()

// Controllers & Routes
app.use('./places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Helo World!')
})

app.get('*', (req,res) => {
    res.status(404) .send('<h1>404 Page</h1>')
})


// Listen for Connections
app.listen(process.env.PORT)
