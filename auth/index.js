const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var morgan = require('morgan')

require('dotenv').config({ path: './config/auth.env' })

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

require('./web/routing/router')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})