const express = require('express')
const path = require('path')
const app = express()
const { port } = require('./data/config.json')
const logger = require('./functions/Logger')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
	message: "Too many requests.",
    statusCode: 429,
    windowMs: 10000,
    max: 5,
    headers: true,
    skipFailedRequests: true,
    handler: function(req, res) {
        res.status(429).render("429");
    },
})

app.set('views', path.join(__dirname) + '/views')
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, "./views")))

app.use('/', require('./routes/Website'))
app.use('/api', require('./routes/Endpoints'), limiter)

app.listen(port, e => {
    if(e) logger.error(`Error occured.\n${e}`)
    else logger.log(`Successfully started plabs api! Working on port ${port}`)
})