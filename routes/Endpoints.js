const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')

function random(array) {
    const randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
}

router.get('/flags', (req, res) => {
    let flags = require('../data/flags')
    res.status(200)
    res.send({
        code: 200,
        message: random(flags),
    })
})

logger.log("Endpoints.js loaded.")

module.exports = router