const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config({ path: './config/posts.env' })

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

require('./web/routing/posts.router')(app)
require('./web/routing/secret-posts.router')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})