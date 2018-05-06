wyin.module('wyin.http.QueuedHandle', function(){
	
	function QueuedHandle(){
		this.queue = [];
		this.requestInProcess = false;
		this.retryDelay = 5;
	}
	
	//Inheritance.js
	wyin.core.extend(QueuedHandle, wyin.http.SimpleHandle);
	
	QueuedHandle.prototype.request = function(method, url, callback, postVars, override){
		if(this.requestInProcess && !override){
			this.queue.push({
				method: method,
				url: url,
				callback: callback,
				postVars: postVars
			});
		}else{
			this.requestInProcess = true;
			var xhr = this.createXhrObject();
			var self = this;
			xhr.onreadystatechange = function(){
				if(xhr.readyState !== 4) return;
				if(xhr.status === 200){
					callback.success(xhr.responseText, xhr.responseXML);
					self.advanceQueue();
				}else{
					callback.failure(xhr.status);
					setTimeout(function(){
						self.request(method, url, callback, postVars);
					}, self.retryDely*1000);
				}
			}
			xhr.open(method, url, true);
			if(method.toLowerCase() != 'post') postVars = null;
			xhr.send(postVars);
		}
	};
	
	QueuedHandle.prototype.advanceQueue = function(){
		if(this.queue.length===0){
			this.requestInProcess = false;
			return;
		}
		var req = this.queue.shift();
		this.request(req.method,req.url,req.callback,req.postVars,true);
	};
	
	return QueuedHandle;
	
});