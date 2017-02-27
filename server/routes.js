/**
 * Main application routes
 */

'use strict';

var routes = {

    registerAll: function(app){
        app.use('/api/things', require('./app/things'));
    }

}

module.exports = routes;