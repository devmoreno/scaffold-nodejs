//Dependencies
var express = require('express');
var app = express();
var routes = require('./routes.js')
app.use(express.static('client'));

Routes
app.get('/', function (req, res) {
  res.redirect("index.html");
});

//Start Server
app.listen(3000, function () {
  console.log('Evanios Test Server is Running!')
})