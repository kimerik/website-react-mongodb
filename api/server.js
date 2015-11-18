/**
 * Created by kimeriksson on 2015-11-17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;
var config = require('./config/config');
var appConfig = require('./routes/app');
var app = express();


/*
 * Allow CORS
 *
 * */
var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Content-Type, Authorization, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    next();
};


app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());



/*
* Return server status alive
* */
app.get('/',function(req, res){
    res.status('200').json('alive');
});

app.get('/app-config',appConfig.getConfig);

/*
* Start listen on http request
* */
app.listen(config.SERVER_PORT, function(){
   console.log('Server on port '+ config.SERVER_PORT);
});