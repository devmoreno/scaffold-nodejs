'use strict';

var bodyParser = require("body-parser");
var express = require('express');
var exphbs = require('express-handlebars');

var config = {
    registerAll: function(app){

        //Enviroment Settings

        //Server Settings
        expressSettings(app);
    }
};

function expressSettings(app){
    
    //Set handlebars as view engine
    app.set('views', 'server/views');
    app.set('view engine', '.hbs');
    app.engine('.hbs', exphbs({ defaultLayout: 'single',
                                extname: '.hbs',
                                layoutsDir: 'server/views/layouts',
                                partialsDir:'server/views/partials/'}));

    //Set Static Resource Server
    app.use(express.static('client'));
    //Parse application/json in our rest api
    app.use(bodyParser.json())
}

module.exports = config;