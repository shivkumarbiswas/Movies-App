(function(){

    'use strict';
    
    angular.module("moviesApp", ["ngRoute"])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('');
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/movies', {
            templateUrl: 'views/movies.html',
            controller: 'MoviesCtrl'
        })
        .when('/addMovie', {
            templateUrl: 'views/addMovie.html',
            controller: 'AddNewMovieCtrl'
        })
        .when('/editMovie/:movie_id', {
            templateUrl: 'views/editMovie.html',
            controller: 'EditMovieCtrl'
        })
        .when('/viewMovie/:movie_id', {
            templateUrl: 'views/viewMovie.html',
            controller: 'ViewMovieCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
    });
})();