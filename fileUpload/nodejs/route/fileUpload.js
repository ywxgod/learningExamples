var fs = require('fs');
var config = require('./../config');

function FileUploader(){}

FileUploader.prototype.uploadHandler = function(req, res){
	var ext = req.query.ext;
	var uid = req.query.uid;
	var imageDir = config.uploadDir;
	var imageBufs = [];
	console.log(ext, uid,'==>');
	
	if(req.readable){ //rest api post
		req.on('data',function(buffer){
			imageBufs[imageBufs.length]= buffer;
		});
		req.on('end',function(){
			var fileName = new Date().getTime().toString()+'.'+ext;
			var filePath = imageDir+fileName;
			var imgData = Buffer.concat(imageBufs);
			
			fs.writeFile(filePath,imgData,function(err){
				if(err){
					res.send('error');
					return;
				}
				res.send(req.protocol+'://'+req.get('host')+'/'+fileName);
			});
		});
	}else{ //form post

	}
};

module.exports = new FileUploader();