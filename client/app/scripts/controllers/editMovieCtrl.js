(function () {

    'use strict';

    angular.module("moviesApp")
        .controller("EditMovieCtrl", function ($scope, $location, $routeParams, movieService) {

            movieService.getMovie($routeParams.movie_id)
                .then(function (movie) {
                    $scope.movie = movie.data;
                });

            $scope.editMovie = function () {
                
                movieService.editMovie($scope.movie).then(function (data) {
                    if (data.status == 200)
                        window.location.href = '#/movies';
                    else
                        $scope.errorMessage = "Updation failed";
                }, function (error) {
                    $scope.errorMessage = "Updation failed";
                });
            }
        });
})();