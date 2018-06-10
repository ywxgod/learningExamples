import { Geometry, LineBasicMaterial, Vector3, Line } from 'three';

function addVertices(n,min,max){
	let getN = ()=>min+Math.random()*(max-min+1);
	let vertices = [];
	for(let i=0;i<n;i++){
		vertices[i] = new Vector3(getN(),getN(),getN());
	}
	return vertices;
}

let lineGeometry = new Geometry();
lineGeometry.vertices.push(...addVertices(30,-100,100));
let material = new LineBasicMaterial({color: 0x00ff00});
let line = new Line(lineGeometry, material);
export default line;
