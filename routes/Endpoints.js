const express = require('express')
const router = express.Router()
const logger = require('../functions/Logger')

function random(array) {
    const randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
}

router.get('/flags', (req, res) => {
    let flags = require('../data/flags')
    let popularArray = []
    let notPopularArray = []
    flags.forEach(flag => {
        if(flag.popular) {
            popularArray.push(flag)
        } else {
            notPopularArray.push(flag)
        }
    })
    let diff = req.query.difficulty

    if(diff == "onlyPopular") {
        res.status(200)
        res.send({
            code: 200,
            message: random(popularArray),
        })
    } else if (diff == "onlyHard") {
        res.status(200)
        res.send({
            code: 200,
            message: random(notPopularArray),
        })
    } else {
        res.status(200)
        res.send({
            code: 200,
            message: random(flags),
        })
    }

})

router.get('/8ball', (req, res) => {
    let answers = require('../data/8ball')
    res.status(200).send({
        code: 200,
        message: random(answers)
    })
})

router.get('/endpoints', (req, res) => {
    let apiRoutes = 0;

    router.stack.forEach(route => {
        apiRoutes += 1;
    })

    res.status(200).send({
        code: 200,
        message: {
            endpoints: apiRoutes
        }
    })
})

logger.log("Endpoints.js loaded.")

module.exports = router