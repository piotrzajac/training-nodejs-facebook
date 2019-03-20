const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id: String,
    created_time: Date,
    body: String
})

const Post = mongoose.model('Post', postSchema)

module.exports = { Post }