const mongoose = require("mongoose")
const { Post } = require('../../models/post')
const connectionString = 'mongodb://localhost'

module.exports = {
    async fetchPosts() {
        const connection = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            dbName: 'posts'
        })

        const posts = await Post.find({})

        await connection.disconnect()

        return posts
    },
    async fetchPost(id) {
        const connection = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            dbName: 'posts'
        })

        const post = await Post.findOne({ id: id })

        await connection.disconnect()

        return post
    }
}