const express = require('express')
const chokidar = require("chokidar")
const fs = require('fs')

const router = express.Router()

function loadJSON(filename){
    return JSON.parse(fs.readFileSync(filename).toString())
}

let posts = loadJSON('./fakes/posts.json')
chokidar.watch('./fakes').on('all', () => {
    posts = loadJSON('./fakes/posts.json')
})

router.get('/posts', (req, res) => res.json(posts))
router.get('/posts/:id', (req, res) => {
    const postId = req.params.id
    const result = posts.find((post) => {
        return post.id === postId
    })
    return res.json(result)
})
router.get('*', (req, res) => res.end('error'))

module.exports = (app) => {
    app.use(router)
}