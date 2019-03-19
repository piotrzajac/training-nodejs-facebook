const express = require('express')
const cors = require('cors')
const app = express()

const posts = [
    { body: 'post numer 1' },
    { body: 'post numer 2' },
    { body: 'post numer 3' },
]

app.use(cors())
app.get('/posts', (req, res) => res.json(posts))
app.get('*', (req, res) => res.end('error'))

app.listen(3000, () => {
    console.log(`Server has started on http://localhost:3000`)
})