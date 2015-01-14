var express = require('express')
var jwt = require('jwt-simple')
var bcrypt = require('bcryptjs')
var User = require('./user')
var _ = require('lodash')
var app = express()
app.use(require('body-parser').json())

var users = [{username:'dickeyxxx', password: '$2a$10$Jmo/n32ofSM9JvzfH0z6Me6TMyn6C/U9JhzDG8xhQC4ExHMG1jXz2'}]
var secretKey = 'supersecretkey'

function findUserByUsername(username) {
    return _.find(users, {username: username})
}

function validateUser (user,password, cb) {
    bcrypt.compare(password, user.password, cb)
}

app.post('/session', function (req, res) {
    var user = findUserByUsername(req.body.username)
    validateUser(user, req.body.password, function (err, valid) {
        if (err || !valid) {
            return res.send(401)
        }
        var token = jwt.encode({username: user.username}, secretKey)
        res.json(token)
    })
})

app.get('/user', function (req, res) {
    var token = req.headers['x-auth']
    var user = jwt.decode(token, secretKey)
    // TODO: pull user info from database
    res.json(user)
})

app.post('/user', function (req,res,next) {
    var user = new User({username: req.body.username})
    bcrypt.hash(req.body.password,10, function (err, hash) {
        user.password = hash
        user.save(function (err, user) {
            if (err) { throw next(err)}
            res.send(201)
        })
    })
})

app.listen(3000)