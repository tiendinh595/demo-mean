/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
'use strict';

var app = angular.module('admin', ['ui.router', 'ngCookies', 'ngFileUpload', 'ui.materialize']);

app.run(function ($rootScope, $cookies) {
    try {
        $rootScope.admin = JSON.parse($cookies.get('admin'));
    } catch (e) {}
});

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
