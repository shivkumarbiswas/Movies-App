(function(){
    
    'use strict';

    angular.module("moviesApp")
        .controller("MoviesCtrl", function($scope, movieService) {
            $scope.movies = movieService.getMovies()
            .then(function(result){
                if(result.data)
                    $scope.movies = result.data;
                else
                    $scope.errorMessage = "No movies found.";
            }, function(error){
                $scope.errorMessage = "No movies found.";
            });

            $scope.deleteMovie = function(movie){
                movieService.deleteMovie(movie._id)
                .then(function(data){
                    if(data.status == 200)
                        window.location.reload();
                    else
                        $scope.deleteErrorMessage = "Deletion failed";
                }, function(){
                    $scope.deleteErrorMessage = "Deletion failed";
                });
            }
        });
})();