/**
获取远端图片，返回给客户端
*/

const http = require('http');
const axios = require('axios');

const server = http.createServer();
server.on('request', function(req,res){

	axios
		.get('http://it-ebooks.info/images/ebooks/15/cracking_codes_with_python.jpg',{responseType: 'stream'})
		.then((response)=>{
			response.data.pipe(res);
		})

});
server.listen(8080);