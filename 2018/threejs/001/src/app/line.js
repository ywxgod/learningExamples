import { Geometry, LineBasicMaterial, Vector3, Line } from 'three';

let lineGeometry = new Geometry();
lineGeometry.vertices.push(new Vector3(-100,0,0));
lineGeometry.vertices.push(new Vector3(0,100,0));
lineGeometry.vertices.push(new Vector3(100,0,0));
lineGeometry.vertices.push(new Vector3(0,0,100));
lineGeometry.vertices.push(new Vector3(0,50,0));
lineGeometry.vertices.push(new Vector3(0,100,0));
let material = new LineBasicMaterial({color: 0x00ff00});
let line = new Line(lineGeometry, material);
export default line;
