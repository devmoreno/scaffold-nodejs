/**
 * Main application routes
 */

'use strict';

var routes = {

    registerAll: function(app){

        //Default Route
        app.get('/', function(req, res) {
            res.render('index', {name:"Edwin"});
        });

        //Rest Api
        app.use('/api/things', require('./app/things')); //example rest api
    }

}

module.exports = routes;