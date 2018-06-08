import * as Three from 'three';
import { 
	Scene, PerspectiveCamera, WebGLRenderer,
	BoxGeometry, MeshBasicMaterial, Mesh
} from 'three';

function render(){
	requestAnimationFrame(render);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}


let ratio = window.innerWidth/window.innerHeight;
let scene = new Scene();
let camera = new PerspectiveCamera(75,ratio,0.1,1000);
let renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new BoxGeometry(1,1,1);
let material = new MeshBasicMaterial({color: 0x00ff00});
let cube = new Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

render();


