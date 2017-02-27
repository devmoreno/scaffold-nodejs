/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

var model = require("./things.model");
var controller = {

    index: function(req,res){
        res.json({
            "Testing": "ok"
        });
    },

    create: function(req,res){
        res.json({
            "Testing": "Fine"
        });
    }

};

module.exports = controller;
