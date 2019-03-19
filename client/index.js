const express = require('express')
const cors = require('cors')

const app = express()

require('dotenv').config({ path: './config/client.env'})

app.use(cors())

require('./web/routing/router')(app)

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})