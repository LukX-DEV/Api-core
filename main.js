const express = require('express')
const path = require('path')
const app = express()
const { port } = require('./data/config.json')
const logger = require('./functions/Logger')

app.set('views', path.join(__dirname) + '/views')
app.set('view engine', 'hbs')

app.use('/', require('./routes/Website'))
app.use('/api', require('./routes/Endpoints'))

app.listen(port, e => {
    if(e) logger.error(`Error occured.\n${e}`)
    else logger.log(`Successfully started plabs api! Working on port ${port}`)
})