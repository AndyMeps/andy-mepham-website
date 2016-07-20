'use strict';

let config = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', 
        {
            url: '/home',
            templateUrl: 'app/partials/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/partials/about.html'
        })
        .state('cv', {
            url: '/cv',
            templateUrl: 'app/partials/cv.html',
            controller: 'CvController as vm'
        });
};

angular
    .module('app')
    .config(config);