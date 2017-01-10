/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
app.directive('postItem', function () {
    return {
        restrict: 'E',
        templateUrl: '/publics/client/directives/post-item.html',
        scope: {
            post: '='
        }
    }
});