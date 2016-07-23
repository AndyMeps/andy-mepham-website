'use strict';

let run = ($rootScope) => {
    $rootScope.$on(
        '$stateChangeStart', 
        (event, toState, toParams, fromState, fromParams) => {}
    );
};

angular
    .module('app')
    .run(run);