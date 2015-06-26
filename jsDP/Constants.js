(function(){
	
	
	var constant = {
		C1: 'a',
		C2: 'b',
		C3: 3,
		C4: 6
	}
	
	Constants.getConstant = function(name){
		if(!constant[name]){
			throw new Error('No constant named '+name)
		}
		return constant[name];
	}
	
	function Constants(args){
		
	}
	
	window.Constants = Constants;
	
})();