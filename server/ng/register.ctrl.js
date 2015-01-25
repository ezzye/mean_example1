angular.module('app')
.controller('RegisterCtrl', function ($scope, RegisterSvc) {
    $scope.register = function (username, password) {
        RegisterSvc.login(username, password)
        .then(function (response) {
            $scope.$emit('register', response.data)
        })
    }
})