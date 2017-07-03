export class ObjUtil{

	static getOwnPropertyNames(obj){
		if(!obj) {return;}
		return Object.getOwnPropertyNames(obj);
	}

	static getOwnPropertySymbols(obj){
		if(!obj) {return;}
		return Object.getOwnPropertySymbols(obj);
	}

}