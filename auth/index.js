const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

require('dotenv').config({ path: './config/auth.env'})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

require('./web/routing/router')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})