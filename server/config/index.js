'use strict';

var bodyParser = require("body-parser");
var express = require('express');

var config = {
    registerAll: function(app){
        //Enviroment Settings


        //Server Settings
        expressSettings(app);
    }
};

function expressSettings(app){
    //Set Static Server
    app.use(express.static('client'));
    // parse application/json 
    app.use(bodyParser.json())
}

module.exports = config;