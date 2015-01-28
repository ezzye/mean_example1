var _ = require ('lodash')
var ws = require('ws')
var clients =[]

exports.connect = function (server) {
    var wss = new ws.Server({server: server})
    wss.on('connection', function (ws) {
        clients.push(ws)
        console.log('client added %s', clients)
        ws.on('close', function () {
            _.remove(clients, ws)
            console.log('client removed %s', clients)
        })
    })
}