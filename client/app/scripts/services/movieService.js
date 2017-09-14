(function(){

    'use strict';
    angular.module("moviesApp")
        .service("movieService", function($http){
            this.getMovies = function(){
                return $http.get("http://localhost:9001/");
            };

            this.addNewMovie = function(movie){
                return $http.post("http://localhost:9001/InsertMovie", movie);
            };

            this.deleteMovie = function(movieId){
                return $http.delete("http://localhost:9001/DeleteMovie/"  + movieId);
            };

            this.editMovie = function(movie){
                return $http.put("http://localhost:9001/editMovie/"  + movie._id, movie);
            };

            this.getMovie = function(movieId){
                return $http.get("http://localhost:9001/getMovie/"  + movieId);
            }
        });
})();