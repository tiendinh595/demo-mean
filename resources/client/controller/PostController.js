/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
app.controller('PostController', function ($scope, $rootScope, $stateParams, $http) {
    $scope.view = function () {
        var alias = $stateParams.alias;
        $scope.post = null;
        $scope.post_related = null;
        $http.get('/api/post/detail/' + alias).then(function (res) {
            $rootScope.title = res.data.name;
            $scope.post = res.data;

        });

        $http.get('/api/post/related/' + alias).then(function (res) {
            $scope.post_related = res.data;
        });
    }
});