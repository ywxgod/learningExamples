import $ from 'jquery';
import { ObjUtil } from '../../utils/ObjUtil';
import headerStyles from './style/header.scss';

export class Header {

	constructor(){
		this.element = $('<div></div>');
		this._init();
		this._render();
	}

	_init(){
		this.element.addClass(headerStyles.header);
		$(document.body).append(this.element);
	}

	_render(){
		let data = {a:1,b:2,c:3};
		let names = ObjUtil.getPropertyNames(data);
		this.element.html(names);
	}


}