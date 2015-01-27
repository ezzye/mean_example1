var ws = require('ws')
exports.connect = function (server) {
    var wss = new ws.Server({server: server})
    wss.on('connection', function (ws) {
        ws.send('hello')
    })
    wss.on('message', function (message) {
        console.log('received: %s', message)
        ws.send(message)
    })
}