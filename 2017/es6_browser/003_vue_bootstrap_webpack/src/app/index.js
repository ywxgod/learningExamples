import Vue from 'vue';
import AppMain from './main/app_main.vue';
import {ObjUtil} from './utils/ObjUtil';

let symbolA = Symbol('Symbol A');
let symbolB = Symbol('Symbol B');
let obj = {[symbolA]:'haha',[symbolB]:'hehe',a:1,b:2,c:3};

let appTitle = 'This is the project about es6+babel+vue+bootstrap+webpack';
let names = ObjUtil.getOwnPropertyNames(obj);
console.log(names);
let symbols = ObjUtil.getOwnPropertySymbols(obj);
console.log(symbols);

let app = new Vue({
	el: '#app',
	data: ()=>{
		return {
			appTitle
		}
	},
	template: `<AppMain :appTitle="appTitle"></AppMain>`,
	components: {AppMain}
});