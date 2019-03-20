require('jasmine')
const nock = require('nock')

const { authenticate } = require('./authenticate')

describe('authenticate middleware', () => {
    it('should be a function', () => {
        expect(typeof authenticate).toBe("function")
    })

    it('should call authenticate service and be authenticated', async () => {
        nock('http://localhost:3002')
            .post('/')
            .reply(200, {status: true})
        const req = { body:{} }
        const res = { send: function(){} }
        const next = { next:function(){} }
        spyOn(next, 'next')
        spyOn(res, 'send')

        await authenticate(req, res, next.next)

        expect(next.next).toHaveBeenCalled()
        expect(res.send).not.toHaveBeenCalled()
    })

    it('should call authenticate service and not be authenticated', async () => {
        nock('http://localhost:3002')
            .post('/')
            .reply(401, {status: false})
        const req = { body:{} }
        const res = { send: function(){} }
        const next = { next:function(){} }
        spyOn(next, 'next')
        spyOn(res, 'send')

        await authenticate(req, res, next.next)

        expect(next.next).not.toHaveBeenCalled()
        expect(res.send).toHaveBeenCalledWith(null)
    })
})