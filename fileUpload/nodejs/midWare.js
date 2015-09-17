var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var errorHandler = require('errorhandler');

function Middleware(){
}
Middleware.prototype.init = function(app, express, config){
	app.use(function(req,res,next){
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
		next();
	});
	app.use(favicon(__dirname+config.faviconPath));
	app.use(logger('dev'));
	app.use(methodOverride());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(express.static(path.join(__dirname,'public','file')));
	if('development' === app.get('env')){
		app.use(errorHandler());
	}
}

module.exports = new Middleware();