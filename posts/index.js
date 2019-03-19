const express = require('express')
const cors = require('cors')
const fs = require("fs");
const app = express()

const posts = JSON.parse(fs.readFileSync('./fakes/posts.json').toString())

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

app.listen(3001, () => {
    console.log(`Server has started on http://localhost:3001`)
})