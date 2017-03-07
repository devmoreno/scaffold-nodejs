/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 */

'use strict';

var model = require("./things.model");
var controller = {

    index: function(req,res){

        //Async Function
        model.methods.getAll({},function(err,results){
            if(err){
                res.json({
                    "Error": "Found"
                }).status(200);
            }else{
                res.json({
                    "index": results
                }).status(200);
            }
        });
    },

    create: function(req,res){

        //Async Function
        model.methods.insert({},function(err,results){
            if(err){
                res.json({
                    "Error": "Found"
                }).status(500);
            }else{
                res.json({
                    "index": results
                }).status(201);
            }
        });
    }

};

module.exports = controller;
