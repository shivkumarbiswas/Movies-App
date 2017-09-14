'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var methodoverride = require("method-override");
var routes = require("./routes/MoviesRoutes.js");
var mongoose = require("mongoose");
var port = process.env.PORT || 9001;

var uri = 'mongodb://localhost:27017/moviesdb';
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useMongoClient: true });
mongoose.connection.once('open', function(){
  console.log('DB connection opened');

  var app = express();
  
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodoverride('X-HTTP-Method-Override'));
  
  //CORS support
  app.use(function(req, res, next){
      res.header('Access-Control-Allow-Origin', "*");
      res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
      res.header('Access-Control-Allow-Headers', "Content-Type");
      next();
  });
  
  //Register the routes
  routes(app);
  
  app.listen(port, function(){
      console.log("Express server listening on port 9001");
  });
});