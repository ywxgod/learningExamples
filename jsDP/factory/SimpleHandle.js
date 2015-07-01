(function(){
	
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
	
	window.SimpleHandle = SimpleHandle;
	
})();