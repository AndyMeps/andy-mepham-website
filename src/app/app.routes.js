routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', 
        {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })
        .state('cv', {
            url: '/cv',
            templateUrl: 'partials/cv.html',
            controller: 'CvController as vm'
        });
}