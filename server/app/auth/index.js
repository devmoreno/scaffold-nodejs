'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/create', controller.create);

module.exports = router;