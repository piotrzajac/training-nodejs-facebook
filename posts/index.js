const express = require('express')
const cors = require('cors')
const chokidar = require("chokidar")
const fs = require('fs')
const app = express()

require('dotenv').config({ path: './config/posts.env'})

function loadJSON(filename){
    return JSON.parse(fs.readFileSync(filename).toString())
}

let posts = loadJSON('./fakes/posts.json')
chokidar.watch('./fakes').on('all', () => {
    posts = loadJSON('./fakes/posts.json')
})

app.use(cors())
app.get('/posts', (req, res) => res.json(posts))
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id
    const result = posts.find((post) => {
        return post.id === postId
    })
    return res.json(result)
})
app.get('*', (req, res) => res.end('error'))

app.listen(process.env.PORT, () => {
    console.log(`Server has started on http://localhost:${process.env.PORT}`)
})