export class ObjUtil{

	static getPropertyNames(obj){
		let names = [];
		for(let i in obj){
			names[names.length] = i;
		}
		return names;
	}


}