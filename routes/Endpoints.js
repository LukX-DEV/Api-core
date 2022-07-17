const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')
const path = require('path')

function random(array) {
    const randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
}

router.get("/", async (req, res) => {
    const options = { 
      root: path.join(__dirname, `../website`)
    }
  res.sendFile(`api.html`, options)
  });

router.get('/flags', (req, res) => {
    let flags = require('../data/flags')
    let popularArray = []
    flags.forEach(flag => {
        if(flag.popular) {
            popularArray.push(flag)
        }
    })
    let popularOnly = req.query.popularOnly

    if(popularOnly == "true") {
        res.status(200)
        res.send({
            code: 200,
            message: random(popularArray),
        })
    } else {
        res.status(200)
        res.send({
            code: 200,
            message: random(flags),
        })
    }

})

logger.log("Endpoints.js loaded.")

module.exports = router