'use strict';

var mongoose = require("mongoose");
require('../models/Movies.js');
var Movies = mongoose.model('Movies');

module.exports.GetMovies = function (req, res) {
    Movies.find({}, function (err, docs) {
        if (err)
            res.status(404).send("No results found");
        else
            res.status(200).json(docs);
    });
};

module.exports.InsertMovie = function (req, res) {
    console.log(req.body);
    var movie = new Movies(req.body);
    movie.save(function (err, movie) {
        if (err) {
            res.status(500).send("Insertion failed");
        }
        else
            res.status(200).send("Succesfully Inserted");
    });
};

module.exports.DeleteMovie = function (req, res) {
    Movies.remove({ _id: req.params.movie_id }, function (err) {
        if (!err) {
            res.status(200).send("Succesfully Deleted");
        }
        else {
            res.status(500).send("Deletion failed");
        }
    });
};

module.exports.EditMovie = function (req, res) {
    Movies.findById(req.params.movie_id, function (err, movie) {
        if (err) {
            res.status(500).send("Updation failed");
        }
        else {
            movie.name = req.body.name || movie.name;
            movie.url = req.body.url || movie.url;
            movie.releaseDate = req.body.releaseDate || movie.releaseDate;
            movie.imdbRating = req.body.imdbRating || movie.imdbRating;

            movie.save(function (err, movie) {
                if (err) {
                    res.status(500).send("Updation failed");
                }
                else
                    res.status(200).send("Succesfully updated");
            });
        }
    });
}

module.exports.GetMovie = function (req, res) {
    Movies.findOne({_id: req.params.movie_id}, function (err, movie) {
        if (err) {
            res.status(500).send("Not found");
        }
        else {
            res.status(200).json(movie);
        }
    });
};