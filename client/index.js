const express = require('express')
const app = express()

const posts = [
  { id: "d5aa72f1-bd5c-5da5-a396-27029317ed8f"},
  { id: "9633168e-4c60-5319-8712-5e675068bcde"}
]

app.get('/posts', (req, res) => res.json(posts))
app.get('*', (req, res) => res.end('error'))

app.listen(3000, () => {
    console.log(`Server has started on http://localhost:3000`)
})