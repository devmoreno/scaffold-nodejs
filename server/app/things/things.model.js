/**
 * Data Model for ORM's or Store Procedures
 */

'use strict';

var model = {

    type: "mysql",
    datastore: "mysql",
    properties: {
        "Name": "String",
        "Age": "Number"
    },
    methods: {
        getAll: function(params,callback)
        {
            //Database Logic here



            //Callback with (Error, Results)
            callback(false,"Index Sucessfull");
        },
        insert: function(params,callback)
        {
            //Database logic here



            //Callback with (Error, Results)
            callback(false,"Insert Successfull");
        }
    }

};

module.exports = model;