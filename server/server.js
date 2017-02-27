'use strict';

//Dependencies
var express = require('express');
var routes = require('./routes');
var config = require('./config');
var middleware = require("./middleware");
var app = express();

//Config
config.registerAll(app);
//Middleware
middleware.registerAll(app);
//Register Routes
routes.registerAll(app);

//Start Server
app.listen(process.env.PORT||8080, function () {
  console.log('Nodejs Server is Running!')
})