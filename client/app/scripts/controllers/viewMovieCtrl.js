(function () {

    'use strict';

    angular.module("moviesApp")
        .controller("ViewMovieCtrl", function ($scope, $location, $routeParams, movieService) {

            movieService.getMovie($routeParams.movie_id)
                .then(function (movie) {
                    $scope.movie = movie.data;
                });
        });
})();