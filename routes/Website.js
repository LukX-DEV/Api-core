const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')

router.get("/", async (req, res) => {
    let endpoints = 0;
    require('./Endpoints').stack.forEach(() => {
        endpoints += 1
    })
    res.render("main", {
        endpoints: endpoints
    })
});


logger.log("Website.js loaded.")

module.exports = router