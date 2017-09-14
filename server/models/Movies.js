'use strict';

var mongoose = require('mongoose');
mongoose.set('debug', true);

//Create the schema
var MoviesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }, 
    releaseDate: {
        type: String,
        required: true
    },
    imdbRating: {
        type: Number,
        required: true
    }
});

//Export the schema
module.exports = mongoose.model('Movies', MoviesSchema);;