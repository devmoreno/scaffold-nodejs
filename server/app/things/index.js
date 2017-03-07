'use strict';

var express = require('express');
var controller = require('./things.controller');

var router = express.Router();

//All routes supported for this api

//Index (Support only GET)
router.get('/', controller.index);

//Create (Support both GET and POST)
router.get('/create', controller.create);
router.post('/create', controller.create);

module.exports = router;