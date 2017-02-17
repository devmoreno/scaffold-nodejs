/**
 * Main application routes
 */

'use strict';

var routes = {

    register: function(app){
        app.use('/api/auth', require('./app/auth'));
    }

}

module.exports = routes;