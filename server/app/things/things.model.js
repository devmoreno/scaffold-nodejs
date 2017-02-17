/**
 * Data Model
 */

'use strict';

var model = {

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

module.exports = model;