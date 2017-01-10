/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
app.controller('MainController', function ($scope, $rootScope, $stateParams, $http) {
    $rootScope.title = 'demo mean';

    $scope.loadNewPost = function () {
        $http.get('/api/post/all').then(function (res) {
           $scope.new_posts = res.data;
        });

        $http.get('/api/post/trending').then(function (res) {
            $scope.trending_posts = res.data;
        });
    };
});