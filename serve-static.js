/**
简单静态文件服务
*/

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const util = require('util');
const cache = {};
const rootDir = 'chat/';

function send404(res){
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.write('Error 404: resource not found.');
	res.end();
}

function sendFile(res, filePath, fileContent){
	let contentType = mime.getType(path.basename(filePath));
	res.writeHead(200, {'Content-Type': contentType});
	res.end(fileContent);
}

async function serveStatic(res, cache, absPath){
	if(cache[absPath]){
		sendFile(res, absPath, cache[absPath]);
		return;
	}
	const read = util.promisify(fs.readFile);
	try{
		let fileContent = await read(absPath, 'utf-8');
		cache[absPath] = fileContent;
		sendFile(res, absPath, fileContent);
	}catch(err){
		console.log(err);
		send404(res);
	}
}

const server = http.createServer((req,res)=>{
	let filePath = false;
	if(req.url==='/'){
		filePath = rootDir+'public/index.html';
	}else{
		filePath = rootDir+`public${req.url}`;
	}
	let absPath = './'+filePath;
	console.log(absPath);
	serveStatic(res, cache, absPath);
});

server.listen(8080, ()=>console.log('server listening on port 8080'));