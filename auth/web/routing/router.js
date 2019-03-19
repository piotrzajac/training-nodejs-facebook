const express = require('express')
const crypto = require('crypto')
const chokidar = require("chokidar")
const fs = require('fs')

const router = express.Router()

const salt = 'piu2h34piuhdfsipuhiuwheru2n34kjndsoij';

function encode(text) {
    return crypto.createHmac('sha256', salt)
        .update(text)
        .digest('hex');
}

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
    res.json({ status: isAuthorized })
})

module.exports = (app) => {
    app.use(router)
}