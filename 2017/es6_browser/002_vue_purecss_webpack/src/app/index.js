import { UrlUtil } from './utils/UrlUtil';
import AppMain from './main/app_main.vue';
import Vue from 'vue';
import 'purecss';
import 'fontAwesome';

let userId = UrlUtil.getUrlQueryByName('userId');
let flag = UrlUtil.getUrlQueryByName('flag');

console.log(userId,flag);

let app = new Vue({
	el: '#app',
	data(){
		return {
			userId,flag
		}
	},
	template: '<AppMain :userId="userId" :flag="flag"></AppMain>',
	components: {AppMain}
});