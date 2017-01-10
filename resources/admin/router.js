/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
'use strict';

app.config(function($urlRouterProvider, $stateProvider) {
    var dashboardState = {
        name: 'dashboard',
        url: '/',
        templateUrl: '/publics/admin/partial/home.html',
        controller: 'MainController'
    };
    var addPostState = {
        name: 'addPost',
        url: '/post/add',
        templateUrl: '/publics/admin/partial/post/add.html',
        controller: 'PostController'
    };
    var editPostState = {
        name: 'editPost',
        url: '/post/edit/{id}',
        templateUrl: '/publics/admin/partial/post/edit.html',
        controller: 'PostController'
    };
    var listPostState = {
        name: 'listPost',
        url: '/post',
        templateUrl: '/publics/admin/partial/post/list.html',
        controller: 'PostController'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(dashboardState);
    $stateProvider.state(listPostState);
    $stateProvider.state(addPostState);
    $stateProvider.state(editPostState);
});