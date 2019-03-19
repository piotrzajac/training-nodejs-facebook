const express = require('express')
const cors = require('cors')
const chokidar = require("chokidar")
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()

require('dotenv').config({ path: './config/auth.env'})

function loadJSON(filename){
    return JSON.parse(fs.readFileSync(filename).toString())
}

let users = loadJSON('./fakes/users.json')
chokidar.watch('./fakes').on('all', () => {
    users = loadJSON('./fakes/users.json')
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    const { login, password } = req.body
    const isAuthorized = users.find((user) => {
        return user.login === login && user.password === password
    })

    res.status(isAuthorized ? 200 : 401)
    res.json({ isAuthorized: isAuthorized })
})
app.get('*', (req, res) => res.end('error'))

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})