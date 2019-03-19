const express = require('express')

const router = express.Router()

const { fetchPosts } = require('../providers/fake-posts.provider')

router.get('/posts', (req, res) => {
    const posts = fetchPosts()
    res.json(posts)
})
router.get('/posts/:id', (req, res) => {
    const postId = req.params.id
    const posts = fetchPosts()
    const result = posts.find((post) => {
        return post.id === postId
    })
    return res.json(result)
})

module.exports = (app) => {
    app.use(router)
}