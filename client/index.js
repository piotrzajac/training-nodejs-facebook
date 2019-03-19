const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()

const postsAddress = 'http://localhost:3001/posts'

app.use(cors())
app.get('/posts', async (req, res) => {
    const response = await fetch(postsAddress)
    const posts = await response.json()

    res.json(posts)
})
app.get('/posts/:id', async (req, res) => {
    const postId = req.params.id
    const response = await fetch(`${postsAddress}/${postId}`)
    const post = await response.json()

    return res.json(post)
})
app.get('*', (req, res) => res.end('error'))

app.listen(3000, () => {
    console.log(`Server has started on http://localhost:3000`)
})