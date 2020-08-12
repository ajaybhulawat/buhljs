var express 		= require('express');
var path 			= require('path');
var bodyParser 		= require('body-parser');
var session 		= require('express-session');
var MongoDBStore 	= require('connect-mongodb-session')(session);
var app 			= express();
var base_path 		= process.env.PWD;
if(process.env.NODE_ENV =='development'){
	var conf 	= require(base_path+"/config/conf_dev.js");
}else{
	var conf 	= require(base_path+"/libs/conf_prod.js");
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.moment 	= moment;
app.locals.conf		= conf;

p.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var store = new MongoDBStore({
	uri: conf.mongodb.url,
	collection: conf.mongodb.db,
	auto_reconnect: true,
	resave: false,
	poolSize	  : 40 ,
	clear_interval: 86400
});
app.use(require('./controllers'));
app.use(function(req, res, next) {		
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
module.exports = app;
