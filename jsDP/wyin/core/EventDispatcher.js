function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

var EventDispatcher = (function(){
	
	function EventDispatcher(){
		this._listeners = {};
	}
	
	EventDispatcher.prototype.on = function(eType,handler){
		if(typeof this._listeners[eType] === 'undefined'){
			this._listeners[eType] = [];
		}
		var token = uuid();
		this._listeners[eType].push({
			token:token,
			handler:handler
		});
		return token;
	};
	
	EventDispatcher.prototype.un = function(token){
		if(!token) {return false;}
		for(var i in this._listeners){
			var handlers = this._listeners[i];
			if(!handlers) {continue;}
			var n = handlers.length;
			for(var j=0;j<n;j++){
				var handler = handlers[j];
				if(handler.token === token){
					handlers.splice(j,1);
					return true;
				}
			}
		}
		return false;
	};
	
	EventDispatcher.prototype.unAll = function(eType){
		if(eType) {
			delete this._listeners[eType];
		}else{
			this._listeners = {};
		}
	};
	
	EventDispatcher.prototype.emit = function(eType,args){
		var handlers = this._listeners[eType];
		if(!handlers){return false;}
		var n = handlers.length;
		for(var i=0;i<n;i++){
			var handler = handlers[i];
			handler.handler.apply(null,arguments);
		}
		return true;
	};
	
	return EventDispatcher;
	
})();

var EventDispatcher2 = {
	_listeners:{},
	on: function(eType,handler){
		if(typeof this._listeners[eType] === 'undefined'){
			this._listeners[eType] = [];
		}
		var token = uuid();
		this._listeners[eType].push({
			token:token,
			handler:handler
		});
		return token;
	},
	un: function(token){
		if(!token) {return false;}
		for(var i in this._listeners){
			var handlers = this._listeners[i];
			if(!handlers) {continue;}
			var n = handlers.length;
			for(var j=0;j<n;j++){
				var handler = handlers[j];
				if(handler.token === token){
					handlers.splice(j,1);
					return true;
				}
			}
		}
		return false;
	},
	emit: function(eType,args){
		var handlers = this._listeners[eType];
		if(!handlers){return false;}
		var n = handlers.length;
		for(var i=0;i<n;i++){
			var handler = handlers[i];
			handler.handler.apply(null,arguments);
		}
		return true;
	}
};

var obj = Object.create(EventDispatcher2);
var token = obj.on('abc',function(e,a,b,c,d){
    console.log(e,a,b,c,d);
});
console.log(token);
//obj.un(token);
obj.emit('abc',1,2,3,4);