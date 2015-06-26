(function(){
	
	/** Class Person */
	function Person(name){
		this.name = name;
	}
	
	Person.prototype.getName = function(){
		return this.name;
	}
	
	/** Class Author */
	function Author(name, books){
		Person.call(this, name);
		this.books = books;
	}
	
	Author.prototype = new Person();
	Author.prototype.constructor = Author;
	Author.prototype.getBooks = function(){
		return this.books;
	}
	
	function extend(subClass, superClass){
		var F = function(){};
		F.prototype = superClass.prototype;
		subClass.prototype = new F();
		subClass.prototype.constructor = subClass;
		subClass.superClass = superClass.prototype;
		if(superClass.prototype.constructor == Object.prototype.constructor){
			superClass.prototype.constructor = superClass;
		}
	}
	
	window.Author = Author;
	window.extend = extend;
	
})();