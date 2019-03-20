const express = require('express')

const router = express.Router()

router.get('/pid', async(req, res) => {
    res.json({
        pid: process.pid
    })
})

module.exports = (app) => {
    app.use(router)
}