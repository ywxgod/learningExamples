wyin.module('wyin.core.Singleton', function(){
	
	function Singleton(){
		
		var privateProp1 = 1;
		var privateProp2 = 2;
		var _instance = null;
		
		function privateMethod2(){
			return privateProp1+privateProp2;
		}
		
		function init(args){
			return {
				getProp1: function(){return privateProp1;},
				getProp2: function(){return privateProp2;},
				setProp1: function(value){privateProp1 = value;},
				setProp2: function(value){privateProp2 = value;},
				publicMethod1: function(){
					return 'abc';
				},
				publicMethod2: privateMethod2
			}
		}
		
		return {
			getInstance: function(args){
				if(_instance===null){
					_instance = init(args);
				}
				return _instance;
			}
		};
		
	}
	
	
	return Singleton();
	
});
