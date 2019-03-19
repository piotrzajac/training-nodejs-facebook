const express = require('express')
const cors = require('cors')
const app = express()

const posts = [
    { id:'1', body: 'post numer 1' },
    { id:'2', body: 'post numer 2' },
    { id:'3', body: 'post numer 3' },
]

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

app.listen(3000, () => {
    console.log(`Server has started on http://localhost:3000`)
})