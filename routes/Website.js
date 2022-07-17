const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')

router.get('/', (req, res) => {
    res.render('main')
})

logger.log("Website.js loaded.")

module.exports = router