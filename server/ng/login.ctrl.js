angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc) {
    console.log('login service called vvvvvvvvvvvvvvvvvvvvvvvvv')
    $scope.login = function (username, password) {
        console.log('scope.login function called wwwwwwwwwwwwwwwwwwwwwwwww')
        UserSvc.login(username, password)
        .then(function (user) {
            console.log(user)
            console.log('Password found in login.ctrl.js')
        })
    }
})