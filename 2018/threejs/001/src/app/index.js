import { 
	Scene, PerspectiveCamera, WebGLRenderer
} from 'three';

import line from './modules/line';
import cube from './modules/cube';
import text from './modules/text';
import favicon from '@assets/favicon.ico';

function render(){
	requestAnimationFrame(render);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	line.rotation.y += 0.02;
	

	renderer.render(scene, camera);
}

function resize(){
	let canvas = renderer.domElement;
	let winWidth = window.innerWidth;
	let winHeight = window.innerHeight;
	let winRatio = winWidth/winHeight;
	let gameRatio = sceneWidth/sceneHeight;
	if(winRatio<gameRatio){
		canvas.style.width = winWidth+'px';
		canvas.style.height = winWidth/gameRatio+'px';
	}else{
		canvas.style.width = winHeight*gameRatio+'px';
		canvas.style.height = winHeight+'px';
	}
}

let sceneWidth = 800;
let sceneHeight = 600;
let ratio = sceneWidth/sceneHeight;
let scene = new Scene();
let camera = new PerspectiveCamera(75,ratio,0.1,1000);
let renderer = new WebGLRenderer();
renderer.setSize(sceneWidth,sceneHeight);
document.body.appendChild(renderer.domElement);


scene.add(cube);
scene.add(line);
camera.position.z = 200;

render();
resize();
window.addEventListener('resize', resize);

text.domText('DOM+CSS hello', 100,100, '#fff');

text.textureText(favicon);
