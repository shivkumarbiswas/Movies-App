(function(){
    
    'use strict';

    angular.module("moviesApp")
        .controller("AddNewMovieCtrl", function($scope, $location, movieService){
            $scope.addNewMovie = function(){
                var movie = {
                    name: $scope.name,
                    url: $scope.url,
                    releaseDate: $scope.releaseDate,
                    imdbRating: $scope.imdbRating
                }
                
                movieService.addNewMovie(movie).then(function(data){
                    if(data.status == 200)
                        window.location.href = '#/movies';
                    else
                        $scope.errorMessage = "Insertion failed";
                }, function(error){
                    $scope.errorMessage = "Insertion failed";
                });
            };
        });
})();