(function(){
	var Interface = function(name, methods){
		if(arguments.length !== 2){
			throw new Error("Interface constructor called with " + arguments.length +
"arguments, but expected exactly 2.");
		}
	};
	
	window.Interface = Interface;
	
})();