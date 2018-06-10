import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

let geometry = new BoxGeometry(50,50,50);
let material = new MeshBasicMaterial({color: 0xff0000});
let cube = new Mesh(geometry, material);

export default cube;