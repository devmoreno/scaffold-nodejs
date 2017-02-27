'use strict';

//Public
var middleware = {
    /**
     * Register all Middlewares
     */
    registerAll: function(app){
        app.use(headerSecurity);
    }
}

module.exports = middleware

//Private

/**
 * Define CORS Settings
 */
function headerSecurity(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
}