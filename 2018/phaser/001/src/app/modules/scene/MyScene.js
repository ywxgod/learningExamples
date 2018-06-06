import phaser from 'phaser';

export class MyScene extends Phaser.Scene{

	constructor(){
		super('MyScene');
	}

	preload(){

	}

	create(){
		let graphics = this.add.graphics();
		graphics.fillStyle(0x888888,0.5);
		graphics.fillRect(0,100,800,100);

		let style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		let text = this.add.text(0,0,'phaser 3.9 text bounds', style);
		text.x = (800-text.width)/2;
		text.y = (100-text.height)/2+100;
	}

	update(){

	}

	render(){

	}

}