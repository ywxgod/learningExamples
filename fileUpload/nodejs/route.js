var uploader = require('./route/fileUpload');

function Route(){}
Route.prototype.init = function(app){
	/**
	 * Test web server.
	 */
	app.get('/', function(req,res,next){
		res.send('aaa');
	});
	
	/**
	 * file upload
	 */
	app.post('/note/image/upload', uploader.uploadHandler);
	
}

module.exports = new Route();