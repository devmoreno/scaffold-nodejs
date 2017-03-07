'use strict';

var bodyParser = require("body-parser");
var express = require('express');
var exphbs = require('express-handlebars');

var config = {
    registerAll: function(app){


        //Server Settings
        expressSettings(app);
    }
};

function expressSettings(app){
    
    //Set handlebars as view engine
    app.set('views', 'server/views');
    app.engine('.hbs', exphbs({defaultLayout: 'single',extname: '.hbs',layoutsDir: 'server/views/layouts',partialsDir:'server/views/partials/'}));
    app.set('view engine', '.hbs');
    //Set Static Server
    app.use(express.static('client'));
    // parse application/json 
    app.use(bodyParser.json())
}

module.exports = config;