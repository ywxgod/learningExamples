
var express = require('express');
var config = require('./config');
var midWare = require('./midWare');
var route = require('./route');
var app = express();

init();

function init(){
	midWare.init(app, express, config);
	route.init(app);
	app.listen(config.port,function(){
		console.log('Express server listening on port '+config.port);
	});
}


