const express = require('express')
const path = require('path')
const app = express()
const { port } = require('./data/config.json')

app.set('views', path.join(__dirname) + '/views')
app.set('view engine', 'hbs')

app.use('/', require('./routes/Website'))
app.use('/api', require('./routes/Endpoints'))

app.listen(port, e => {
    if(e) return 
})