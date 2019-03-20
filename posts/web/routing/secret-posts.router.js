const express = require('express')

const router = express.Router()

const { fetchPosts, fetchPost } = require('../providers/posts.provider')
const { authenticate } = require('../middleware/authenticate')

router.post('/posts', authenticate, async (req, res) => {
    const posts = await fetchPosts()
    res.json(posts)
})
router.post('/posts/:id', authenticate, async (req, res) => {
    const post = await fetchPost(req.params.id)
    return res.json(post)
})

module.exports = (app) => {
    app.use('/secret', router)
}