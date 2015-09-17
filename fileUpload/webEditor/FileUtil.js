(function($){
	
	function FileUtil(){
	}
	
	FileUtil.isSupport = function(){
		return window.FileReader && window.File && window.FileList && window.Blob;
	}
	
	FileUtil.readFile = function(fileInfo, format){
		if(!FileUtil.isSupport()){
			return;
		}
		var loader = $.Deferred(),
			fReader = new FileReader();
		format = format||'binary';
		fReader.onloadend = function (e) {
			console.log(e.target.result,fReader.result);
			console.log('File read completely...',e.target.result.byteLength);
			loader.resolve(e.target.result);
		};
		fReader.onloadstart = function(e){
			console.log('Start reading file...');
			loader.notify(e);
		};
		fReader.onerror = function(e){
			console.log('An error occurred while reading...',e);
			loader.reject('error');
		}
		fReader.onprogress = function(e){
			console.log('Reading...');
			loader.notify(e);
		};
		fReader[format==='binary'?'readAsArrayBuffer':'readAsDataURL'](fileInfo);
		return loader.promise();
	}
	
	FileUtil.uploadFile = function(buffer,url,param,cb){
		var xhr = new XMLHttpRequest();
		var url = url;
		url += '?';
		url += 'uid='+param.uid+'&';
		url += 'ext='+param.ext;
		xhr.open('POST', url, true);
		xhr.onload = function(){
			console.log(xhr.response,xhr.responseText,xhr.responseBody);
			cb(xhr.responseText);
		};
		xhr.send(buffer);
	}
	
	window.FileUtil = FileUtil; 
	
})($);