var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')
var logger = require('morgan')
var websockets = require('./websockets')

var app = express()

app.use(require('./auth'))
app.use(bodyParser.json())

app.use('/api/posts',require('./controllers/api/posts'))
// app.use(require('./controllers/static'))
app.use('/', require('./controllers/static'))

app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

var port = process.env.PORT || 3000

var server = app.listen(3000, function () {
    console.log('Server', process.pid, 'listening on', port)
})
websockets.connect(server)