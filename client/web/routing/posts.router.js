const express = require('express')
const fetch = require('node-fetch') // axios as alternative

const router = express.Router()

const postsAddress = 'http://localhost:3001/posts'

router.get('/posts', async(req, res) => {
    const response = await fetch(postsAddress)
    const posts = await response.json()

    res.json(posts)
})
router.get('/posts/:id', async(req, res) => {
    const postId = req.params.id
    const response = await fetch(`${postsAddress}/${postId}`)
    const post = await response.json()

    return res.json(post)
})

module.exports = (app) => {
    app.use(router)
}