/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
app.controller('TagController', function ($scope, $rootScope, $stateParams) {
    $rootScope.title = 'Tag page';
    $scope.view = function () {
        var alias = $stateParams.alias;
        $scope.post = {
            title: 'tieu de',
            content: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            tags: [
                {title: 'php', href: 'php'},
                {title: 'css', href: 'css'},
                {title: 'javascript', href: 'javascript'},
                {title: 'html', href: 'html'}
            ]
        }
    }
});