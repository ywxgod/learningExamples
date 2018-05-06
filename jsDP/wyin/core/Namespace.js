var wyin = wyin||{};

wyin.module = function(namespace, fun){
	var nsparts = namespace.split(".");
    var parent = wyin;
 
    if (nsparts[0] === "wyin") {
        nsparts = nsparts.slice(1);
    }
 
    for (var i = 0, n = nsparts.length; i < n; i++) {
        var partname = nsparts[i];
		if(i === n-1){
			parent[partname] = fun();
			if(typeof parent[partname] === 'undefined'){
				parent[partname] = {};
			}
		}else{
	        if (typeof parent[partname] === "undefined") {
	            parent[partname] = {};
	        }
		}
	    parent = parent[partname];
    }
    return parent;
};