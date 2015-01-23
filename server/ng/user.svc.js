angular.module('app')
.service('UserSvc', function ($http) {
    var svc = this
    svc.getUser = function () {
        return $http.get('/api/users', {header: { 'x-auth': this.token}
        })
    }
    svc.login =function (username, password) {
        return $http.post('/api/sessions', {
            username: username,
            password: password
        }).then(function (val) {
            console.log('This is token')
            svc.token = val.data
            console.log(svc.token)
            return svc.getUser()
        })
    }
})