const express = require('express')

const app = express()

app.get('/posts', (req, res) => res.end('world'))
app.get('*', (req, res) => res.end('error'))

app.listen(3001, () => {
    console.log(`Server has started on http://localhost:3001`)
})