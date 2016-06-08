angular.module('todomvc')
    .directive('tdFooter', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: '/todomvc/footer.html'
        };

    });
