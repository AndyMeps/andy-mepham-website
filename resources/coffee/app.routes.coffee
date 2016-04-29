'use strict'

config = ($stateProvider, $urlRouterProvider) ->
    $urlRouterProvider.otherwise '/home'
    
    $stateProvider
        .state(
            'home',
            {
                url: '/home',
                templateUrl: 'app/partials/home.html'
            })
        .state(
            'about',
            {
                url: '/about',
                templateUrl: 'app/partials/about.html'
            }
        )
angular
    .module 'app'
    .config config