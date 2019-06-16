import Phaser from 'phaser';

export class MyScene extends Phaser.Scene{

	constructor(){
		super('MyScene');
		this.text = null;
	}

	preload(){

	}

	create(){
		let graphics = this.add.graphics();
		console.log(Phaser.Math);
		graphics.fillStyle(0x888888,0.5);
		graphics.fillRect(0,100,800,100);

		let style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		this.text = this.add.text(0,0,Phaser.Math.DEG_TO_RAD, style);
		this.text.x = (800)/2;
		this.text.y = (100)/2+100;
		this.text.setOrigin(0.5);

		this.input.on('pointerdown', this.onPointerDown, this);
	}

	onPointerDown(){
		let round = Phaser.Math.Between(1,6);
		let angle = Phaser.Math.Between(0,360);
		console.log(round);
		this.tweens.add({
			targets:[this.text],
			angle: round*360+185,
			duration: 3000,
			ease: 'Cubic.easeOut',
			callbackScope: this,
			onComplete:function(tween){
				console.log('complete.', this.text.angle,angle);
				//this.text.angle = 0;
				/*this.tweens.add({
					targets:[this.text],
					angle: angle>180?360:180,
					duration: 3000,
					ease: 'Cubic.easeOut',
					callbackScope: this,
					onComplete: function(tween){
						console.log('back complete.');
					}
				});*/
			}
		});
		console.log();
	}

	update(){

	}

	render(){

	}

}