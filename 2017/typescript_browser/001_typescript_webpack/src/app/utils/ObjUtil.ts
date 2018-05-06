export class ObjUtil{

	static getOwnPropertyNames(obj:Object):string[] {
		if(!obj) return;
		return Object.getOwnPropertyNames(obj);
	}

	static getOwnProperytSymbols(obj:Object):Symbol[] {
		if(!obj) return;
		return Object.getOwnPropertySymbols(obj);
	}

}