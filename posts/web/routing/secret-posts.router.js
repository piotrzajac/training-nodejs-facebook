const express = require('express')

const router = express.Router()

const { fetchSecretPosts } = require('../providers/fake-posts.provider')
const { authenticate } = require('../middleware/authenticate')

router.post('/posts', authenticate, (req, res) => {
    const posts = fetchSecretPosts()
    res.json(posts)
})
router.post('/posts/:id', authenticate, (req, res) => {
    const postId = req.params.id
    const posts = fetchSecretPosts()
    const result = posts.find((post) => {
        return post.id === postId
    })
    return res.json(result)
})

module.exports = (app) => {
    app.use('/secret', router)
}