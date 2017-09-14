(function () {

    'use strict';

    angular.module("moviesApp")
        .directive('youtube', function () {
            return {
                restrict: 'E',
                scope: {
                    src: '='
                },
                templateUrl: 'views/youtube.html'
            }
        })
        .filter('trusted', function($sce) {
            return function(url) {
                return $sce.trustAsResourceUrl(url);
            }
        });
})();