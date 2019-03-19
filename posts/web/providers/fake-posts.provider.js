const chokidar = require("chokidar")
const fs = require('fs')

function loadJSON(filename) {
    return JSON.parse(fs.readFileSync(filename).toString())
}

let posts = loadJSON('./fakes/posts.json')
let secretPosts = loadJSON('./fakes/secret-posts.json')
chokidar
    .watch('./fakes')
    .on('change', () => {
        posts = loadJSON('./fakes/posts.json')
        secretPosts = loadJSON('./fakes/secret-posts.json')
    })

module.exports = {
    fetchPosts() {
        return posts
    },
    fetchSecretPosts() {
        return secretPosts
    }
}