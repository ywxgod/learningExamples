var fs = require('fs');
var config = require('./../config');
var uuid = require('node-uuid');

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
			var v4Uuid = uuid.v4(),
				fileName = v4Uuid+'.'+ext,
				filePath = imageDir+fileName,
				imgData = Buffer.concat(imageBufs);
			
			fs.writeFile(filePath,imgData,function(err){
				if(err){
					res.send('error');
					return;
				}
				res.send({
					path: req.protocol+'://'+req.get('host')+'/'+fileName,
					name: v4Uuid
				});
			});
		});
	}else{ //form post

	}
};

module.exports = new FileUploader();