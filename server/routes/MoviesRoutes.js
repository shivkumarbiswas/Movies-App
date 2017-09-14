'use strict';

var controller = require("../controllers/MoviesController.js");

module.exports = function(app) {
    //Routes
    app.get('/', controller.GetMovies);

    app.post('/InsertMovie', controller.InsertMovie);

    app.delete('/DeleteMovie/:movie_id', controller.DeleteMovie);
    
    app.put('/EditMovie/:movie_id', controller.EditMovie);

    app.get('/GetMovie/:movie_id', controller.GetMovie);
};