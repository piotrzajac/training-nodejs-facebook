const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var morgan = require('morgan')
const path = require('path')

require('dotenv').config({
    path: path.join(__dirname, './config/client.env')
})

const app = express()

app.use(express.static(path.join(__dirname, './dist')))
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

require('./web/routing/posts.router')(app)
require('./web/routing/secret-posts.router')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})