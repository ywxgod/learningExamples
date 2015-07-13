/**
 * Created by ywxgod on 7/13 0013.
 */
window.onload = init;

var scene, camera, lights, plane, objects=[], render;
var stat, gui, control;

function init(){
    stat = initStat();
    control = initControls();
    scene = createScene();
    camera = createCamera();
    lights = createLights();
    plane = createPlane();
    objects = createObjects();
    render = createRenderer();

    //scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(plane);

    objects.forEach(function(obj){
        scene.add(obj);
    });

    camera.lookAt(scene.position);

    var sceneDiv = document.getElementById('sceneDiv');
    sceneDiv.appendChild(render.domElement);


    render3d();
}

function initStat(){
    var stat = new Stats();
    stat.setMode(0);
    stat.domElement.style.position = 'absolute';
    stat.domElement.style.left = 0;
    stat.domElement.style.top = 0;
    document.body.appendChild(stat.domElement);
    return stat;
}

function initControls(){

    function Controls(){
        this.rspeed = 0.02;
        this.bspeed = 0.01;
    }

    var control = new Controls();
    gui = new dat.GUI();
    gui.add(control,'rspeed',0,0.5);
    gui.add(control,'bspeed',0,0.5);
    return control;
}

function createScene(){
    var axis = new THREE.AxisHelper(20);
    var scene = new THREE.Scene();
    scene.add(axis);
    return scene;
}

function createCamera(){
    var camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.z = 15;
    camera.position.x = -5;
    camera.position.y = 15;
    return camera;
}

function createLights(){
    var lights = [
        new THREE.AmbientLight(0x0c0c0c),
        new THREE.SpotLight(0xffffff)
    ];
    //lights[0].castShadow = true;
    lights[1].castShadow = true;
    lights[1].position.x = -15;
    lights[1].position.y = 75;
    lights[1].position.z = 15;
    return lights;
}

function createPlane(){
    var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
    var planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);
    plane.rotation.x = -0.5*Math.PI;
    plane.receiveShadow = true;
    return plane;
}

function createObjects(){
    var objs = [];
    for(var i= 0,n=50;i<n;i++){
        var cubeSize = Math.floor(Math.random()*5);
        var cubeGeometry = new THREE.CubeGeometry(cubeSize,cubeSize,cubeSize);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random()*0xffffff});
        var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
        cube.castShadow = true;
        cube.name = 'cube-'+i;
        cube.position.y = 5+ Math.random()*3;
        cube.position.x = -30+(Math.random()*60);
        cube.position.z = -10 + Math.random()*20;
        objs[i] = cube;
    }

    return objs;
}

function createRenderer(){
    var render = new THREE.WebGLRenderer();
    render.setClearColor(0xeeeeee,1);
    render.setSize(window.innerWidth,window.innerHeight);
    render.shadowMapEnabled = true;
    return render;
}

function render3d(){
    requestAnimationFrame(render3d);
    /*control.rspeed += 0.0001;
    control.bspeed += 4;
    objects.forEach(function(obj){
        obj.rotation.y += Math.sin(control.bspeed)*0.1;
        obj.position.x += 0.5*Math.cos(control.rspeed);
    });*/

    control.rspeed += 0.01;
    control.bspeed += 0.01;
    scene.traverse(function(obj){
        if(obj instanceof THREE.Mesh && obj!==plane){
            obj.rotation.y += Math.sin(control.bspeed)*0.1;
            obj.position.x += 0.2*Math.cos(control.rspeed);
        }
    });


    stat.update();
    render.render(scene,camera);
}