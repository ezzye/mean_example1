var app = angular.module('app', [])

app.service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('api/posts')
    }
})

app.controller('PostCtrl', function($scope, PostsSvc) {
    $scope.addPost = function() {
        if ($scope.postBody) {
            $http.post('/api/posts', {
                username: 'dickeyxxx',
                body: $scope.postBody
            }).success(function(post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })
        }
    }
    PostsSvc.fetch()
    .success(function(posts) {
        $scope.posts = posts
    })
})