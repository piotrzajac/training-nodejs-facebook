require('jasmine')

const nock = require('nock')
const supertest = require('supertest')
const express = require('express')
const router = require('./posts.router')

describe('posts router', () => {
    it('was used', () => {
        const app = express()
        spyOn(app, 'use')
        router(app)
        expect(app.use).toHaveBeenCalled()
    })

    it('should send post list', (done) => {
        const postsAddress = '/posts'
        const expectedPost = {id: "aaa", body: "aaa"}
        nock('http://localhost:3001')
            .get(postsAddress)
            .reply(200, [
                expectedPost,
                {id: "bbb", body: "bbb"},
                {id: "ccc", body: "ccc"}
            ])
        const app = express()
        router(app)

        supertest(app)
            .get(postsAddress)
            .then((response) => {
                expect(response.body).toContain(expectedPost)
            })
            done()
    })

    it('should send single post', (done) => {
        const postsAddress = '/posts/1'
        const expectedPost = {id: "aaa", body: "aaa"}

        nock('http://localhost:3001')
            .get(postsAddress)
            .reply(200, expectedPost)
        const app = express()
        router(app)

        supertest(app)
            .get(postsAddress)
            .then((response) => {
                expect(response.body).toEqual(expectedPost)
            })
            done()
    })
})