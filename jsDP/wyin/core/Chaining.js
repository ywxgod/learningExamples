wyin.module('wyin.core.$', function(){
	
	function _$(){
		this._elements = [];
		var argLen = arguments[0].length,
			ele = null;
		for(var i=0;i<argLen;i++){
			ele = arguments[0][i];
			if(typeof ele === 'string'){
				ele = document.getElementById(ele);
			}
			this._elements[i] = ele;
		}
	}
	
	_$.prototype.each = function(fn){
		for(var i=0,n=this._elements.length;i<n;i++){
			fn.call(this,this._elements[i]);
		}
		return this;
	};
	
	_$.prototype.setStyle = function(prop, val){
		this.each(function(ele){
			ele.style[prop] = val;
		});
		return this;
	};
	
	_$.prototype.show = function(){
		this.each(function(ele){
			ele.style['display'] = 'block';
		});
		return this;
	};
	
	_$.prototype.hide = function(){
		this.each(function(ele){
			ele.style['display'] = 'none';
		});
		return this;
	};
	
	_$.prototype.addEvent = function(type, fn){
		var add = function(ele){
			if(window.addEventListener){
				ele.addEventListener(type, fn, false);
			}else if(window.attachEvent){
				ele.attachEvent('on'+type, fn);
			}
		}	
		this.each(function(ele) {
			add(ele);
		});
		return this;
	};
	
	_$.prototype.removeEvent = function(type, fn){
		var remove = function(ele){
			if(window.removeEventListener){
				ele.removeEventListener(type, fn);
			}else if(window.detachEvent){
				ele.detachEvent('on'+type, fn);
			}
		}
		this.each(function(ele){
			remove(ele);
		});
		return this;
	};
	
	return function(){
		return new _$(arguments);
	};
	
});