wyin.module('wyin.http.SimpleHandle', function(){
	
	var Interface = wyin.core.Interface;
	
	var AjaxHandler = new Interface('AjaxHandler', ['request', 'createXhrObject']);
	
	function SimpleHandle(){}
	
	SimpleHandle.prototype.request = function(method, url, callback, postVars){
		var xhr = this.createXhrObject();
		xhr.onreadystatechange = function(){
			if(xhr.readyState!==4) return;
			(xhr.status === 200)?
			callback.success(xhr.responseText, xhr.responseXML):
			callback.failure(xhr.status);
		}
		xhr.open(method, url, true);
		if(method.toLowerCase() !== 'post') postVars = null;
		xhr.send(postVars);
	};
	
	SimpleHandle.prototype.createXhrObject = function(){
		var methods = [
			function(){return new XMLHttpRequest();},
			function(){return new ActiveXObject('Msxml2.XMLHTTP');},
			function(){return new ActiveXObject('Microsoft.XMLHTTP');}
		];
		var xhr = null;
		for(var i=0,len=methods.length;i<len;i++){
			try{
				xhr = methods[i]();
			}catch(e){
				console.log(e);
				continue;
			}
			return xhr;
		}
		throw new Error('SimpleHandle: can not create an XHR object.');
	};

    SimpleHandle.prototype.loadJs = function(jsFile, cb){
        var jsTag = document.createElement('script');
        if(typeof cb === 'function'){
            jsTag.onload = cb;
            //for IE
            jsTag.onreadystatechange = function(){
                console.log(jsTag.readyState);
                if(jsTag.readyState!=4) return;
                if(jsTag.status != 200){
                    console.log('Load js file from '+ jsFile + 'failed. Code: '+ jsTag.status);
                    return;
                }
                cb();
            }
        }
        jsTag.src = jsFile;
        document.body.appendChild(jsTag);
    };
	
	return SimpleHandle;
});