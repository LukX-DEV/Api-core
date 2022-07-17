const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')

router.get('/endpoints', (req, res) => {
    res.send({
        message: "The list of endpoints is now available on main page!"
    })
})

logger.log("Endpoints.js loaded.")

module.exports = router