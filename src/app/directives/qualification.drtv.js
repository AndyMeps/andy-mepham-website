function qualification() {
    return {
        restrict: 'A',
        scope: {
            row: '='
        },
        templateUrl: '../directives/qualification.html'
    };
}

// eslint-disable-next-line no-undef
export default angular.module('app.directives', [])
    .directive('qualification', qualification)
    .name;