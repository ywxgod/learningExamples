function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function isArray(obj){
	return Array.isArray?Array.isArray(obj):(Object.prototype.toString.call(obj) === '[object Array]');
}
function isDate(obj){
	return obj instanceof Date;
};

function copy(source){
	if(!source){return;}
	
	var target;
	if(arguments.length>1){
		target = arguments[0];
		source = arguments[1];
	} else 
		target = (isArray(source)?[]:{});

	for (var method in source){
		var from = source[method];
		if(from && typeof from == "object"){
			if (!isDate(from)){
				target[method] = (isArray(from)?[]:{});
				copy(target[method],from);
			} else
				target[method] = new Date(from);
		} else {
			target[method] = from;
		}
	}
	return target;	
};