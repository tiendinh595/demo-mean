/**
 * Created by Vu Tien Dinh on 1/4/2017.
 */
'use strict';

var app = angular.module('demo', ['ui.router']);
app.run(function ($rootScope) {
    $rootScope.$on('$includeContentLoaded', function() {
        $('.item-img').each(function (a,b) {
            console.log(a, b)
        })
    });
});