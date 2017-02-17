'use strict';

//Dependencies
var express = require('express');
var routes = require('./routes');
var app = express();


//Set Static Server
app.use(express.static('client'));
//Register Configuration

//Register Routes
routes.register(app);

//Start Server
app.listen(3000, function () {
  console.log('Evanios Test Server is Running!')
})