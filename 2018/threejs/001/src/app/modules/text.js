import * as THREE from 'three';
import { TextureLoader, TextGeometry } from 'three';

function domText(text,x,y,color){
	let div = document.createElement('div');
	div.innerHTML = text;
	div.style.position = 'absolute';
	div.style.left = x+'px';
	div.style.top = y+'px';
	div.style.zIndex = 100;
	div.style.color = color;
	document.body.appendChild(div);
}

function textureText(image){
	let texture = new TextureLoader().load(image);
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(4,4);
}

function textGeometry(text,options){
	let txtGeometry = new TextGeometry(text,Object.assign({

	},options));
	return txtGeometry;
}

export default {
	domText,
	textureText,
	textGeometry
};