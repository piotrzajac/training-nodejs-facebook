const express = require('express')
const chokidar = require("chokidar")
const fs = require('fs')

const router = express.Router()

function loadJSON(filename){
    return JSON.parse(fs.readFileSync(filename).toString())
}

let users = loadJSON('./fakes/users.json')
chokidar.watch('./fakes').on('all', () => {
    users = loadJSON('./fakes/users.json')
})

router.post('/', (req, res) => {
    const { login, password } = req.body
    const isAuthorized = users.find((user) => {
        return user.login === login && user.password === password
    })

    res.status(isAuthorized ? 200 : 401)
    res.json({ isAuthorized: isAuthorized })
})
router.get('*', (req, res) => res.end('error'))

module.exports = (app) => {
    app.use(router)
}