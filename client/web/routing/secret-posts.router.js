const express = require('express')
const fetch = require('node-fetch') // axios as alternative

const router = express.Router()

const postsAddress = 'http://localhost:3001/secret/posts'

router.post('/posts', async(req, res) => {
    const response = await fetch(
        postsAddress, {
            method: 'post',
            body: new URLSearchParams(req.body)
        })
    const posts = await response.json()

    res.json(posts)
})
router.post('/posts/:id', async(req, res) => {
    const postId = req.params.id
    const response = await fetch(
        `${postsAddress}/${postId}`, {
            method: 'post',
            body: new URLSearchParams(req.body)
        })
    const post = await response.json()

    return res.json(post)
})

module.exports = (app) => {
    app.use('/secret', router)
}