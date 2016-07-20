'use strict';

let run = ($rootScope, ngProgressFactory) => {
    $rootScope.$on(
        '$stateChangeStart', 
        (event, toState, toParams, fromState, fromParams) => {
            $rootScope.progressbar.start();
            $rootScope.progressbar.complete();
        }
    );
};

angular
    .module('app')
    .run(run);