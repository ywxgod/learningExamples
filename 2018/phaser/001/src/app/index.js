import {MyScene} from './modules/scene/MyScene';
import Phaser from 'phaser';
import '@assets/app.scss';


let gameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'app',
	backgroundColor: 0x333333,
	scene: [MyScene]
};

let game = null;

window.onload = ()=>{
	
	game = new Phaser.Game(gameConfig);
	resize();
	window.addEventListener('resize', resize);
};



function resize(){
	let canvas = document.querySelector('canvas');
	let winWidth = window.innerWidth;
	let winHeight = window.innerHeight;
	let winRatio = winWidth/winHeight;
	let gameRatio = game.config.width/game.config.height;
	if(winRatio<gameRatio){
		canvas.style.width = winWidth+'px';
		canvas.style.height = winWidth/gameRatio+'px';
	}else{
		canvas.style.width = winHeight*gameRatio+'px';
		canvas.style.height = winHeight+'px';
	}
}


