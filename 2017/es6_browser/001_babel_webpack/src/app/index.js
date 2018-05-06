import * as _ from 'lodash';
import { Header } from './view/header/header.js';
import './index.scss';
import myPhoto from './myPhoto1.jpg';

class IndexPage{

	constructor(){
		this._btn = null;
		this._header = null;
		this._img = null;
		this._arr = [0,false,1,{},3,new Date(),'0'];

		this._init();
		this._addChild();
		this._addListeners();
	}
	
	_init(){
		console.log(myPhoto);
		this._btn = document.querySelector('#target button');
		this._img = document.querySelector('#target img');
	}

	_addChild(){
		this._header = new Header();
		this._img.src = myPhoto;
	}

	_addListeners(){
		this._btn.addEventListener('click', ()=>{
			let compactArr = _.compact(this._arr);
			console.log(compactArr);
		});
	}

}

new IndexPage();


