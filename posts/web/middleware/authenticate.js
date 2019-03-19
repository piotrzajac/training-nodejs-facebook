const fetch = require('node-fetch')

async function authenticate(req, res, next) {
    try {
        const response = await fetch(
            `http://localhost:3002`, {
                method: 'POST',
                body: new URLSearchParams(req.body)
            }
        )
        const { status } = await response.json()

        if (!status) {
            console.error('unauthorized')
            res.send(null)
        } else {
            next()
        }
    } catch (err) {
        res.send(null)
    }
}

module.exports = { authenticate }