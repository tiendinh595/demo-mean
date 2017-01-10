/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
'use strict';

app.config(function($urlRouterProvider, $stateProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: '/publics/client/partial/home.html',
        controller: 'MainController'
    };

    var viewState = {
        name: 'viewState',
        url: '/view/{alias}',
        templateUrl: '/publics/client/partial/post/detail.html',
        controller: 'PostController'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>About page</h3>'
    };

    var contactState = {
        name: 'contact',
        url: '/contact',
        template: '<h3>Contact page</h3>'
    };

    var tagState = {
        name: 'tagState',
        url: '/tags/{alias}',
        templateUrl: '/publics/client/partial/post/tag.html',
        controller: 'TagController'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(homeState);
    $stateProvider.state(aboutState);
    $stateProvider.state(contactState);

    $stateProvider.state(viewState);
    $stateProvider.state(tagState);
});