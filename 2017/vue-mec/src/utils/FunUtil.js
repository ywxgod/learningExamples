export class FunUtil{

    static isFun(obj){
        return typeof obj === 'function';
    }

    static partial(){
		let args = Array.prototype.slice.call(arguments);
		let fun = args[0];
		args.shift();
		if(typeof fun !== 'function') {return;}
		return function(){
			return fun.apply(this, [...args,...arguments]);
		};
	}

	static single(source){
		var instance = null;
		var t = function(config){
			if (!instance)
				instance = new source({});
			return instance;
		};
		t.prototype = source.prototype;
		t.prototype.constructor = source;
		return t;
	}


}