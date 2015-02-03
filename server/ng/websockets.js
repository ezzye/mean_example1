angular.module('app')
.run(function ($rootScope, $timeout, $window) {
    (function connect() {
        var host
        if ($window.location.protocol === "https:") {
          host = "wss://" + $window.location.host
        } else {
          host = "ws://" + $window.location.host
        }
        var connection = new WebSocket(host)
        
        connection.onclose = function (e) {
            console.log('WebSocket closed.  Reconnecting...')
            $timeout(connect, 10*1000)
        }
        connection.onmessage = function (e) {
            console.log(e)
            var payload = JSON.parse(e.data)
            $rootScope.$broadcast('ws:' + payload.topic, payload.data)
        }
        connection.onopen = function () {
            console.log('WebSocket connected')
        }
        
    }) ()
})