var express = require('express');
var router = express.Router();
var multer  = require('multer');
var uuid = require('uuid');
var fs = require('fs');
var mime = require('mime');
var util = require('util');
var promisify = util.promisify;
var path = require('path');

// var storage = multer.diskStorage({
// 	destination: 'files/',
// 	filename: function (req, file, cb) {
// 		let ext = mime.getExtension(file.mimetype);
// 	    cb(null, uuid.v4()+'.'+ext);
// 	}
// });

var upload = multer({dest: 'files/'});



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/upload',upload.array('files[]',2), function(req, res){
	//console.log(req.files);
	var recordFile = fs.createWriteStream('files/t.txt', {flags:'a'});
	var list = req.files.map(function(file){
		let obj = {};
		console.log(file);
		obj.fileName = file.originalname;
		obj.fileId = file.filename;
		let ext = obj.fileName.slice(obj.fileName.lastIndexOf('.')+1);
		recordFile.write(obj.fileId+'--'+ext+'--'+file.originalname+'\n');
		//obj.path = 'http://localhost:3000/'+file.destination+file.filename+'.'+mime.getExtension(file.mimetype);
		return obj;
	});
	recordFile.end();
	res.send({success:true, files: list});
})

router.get('/upload/:fileId', function(req, res){
	let fileId = req.params.fileId;
	let ext = null;

	var lineReader = require('readline').createInterface({
	  	input: require('fs').createReadStream(path.join(__dirname,'../files/t.txt'))
	});

	lineReader.on('line', function (line) {
	  	let lineInfo = line.split('--');
	  	if(lineInfo[0]===fileId){
	  		ext = lineInfo[1];
	  		lineReader.close();
	  	}
	});
	
	lineReader.on('close', ()=>{
		let mimetype = mime.getType(ext);
		
		let filePath = path.join(__dirname,'../files/'+fileId);
		console.log(mimetype,ext,'----------');

		promisify(fs.stat)(filePath).then(stats=>{
			res.writeHead(200,{
				'Content-Disposition': 'attachment; filename='+fileId+'.'+ext,
				'Content-Type': mimetype,
				'Content-Length': stats.size
			});
			fs.createReadStream(filePath).pipe(res);
		})
	});



	
	
})

module.exports = router;
