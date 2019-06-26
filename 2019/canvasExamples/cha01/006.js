var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var rubberbandDiv = document.getElementById('rubberbandDiv');
var resetButton = document.getElementById('resetButton');
var image = new Image();
var mousedown = {};
var rubberbandRect = {};
var dragging = false;

image.src = './images/006.jpg';
image.onload = function(){
    context.drawImage(image, 0,0,canvas.width,canvas.height);
};
resetButton.onclick = function(e){
    context.drawImage(image,0,0,canvas.width,canvas.height);
};
canvas.onmousedown = function(e){
    e.preventDefault();
    mousedown.x = e.clientX;
    mousedown.y = e.clientY;
    dragging = true;
    rubberbandStart();
}
window.onmousemove = function(e){
    if(!dragging) return;
    e.preventDefault();
    var x = e.clientX;
    var y = e.clientY;

    rubberbandRect.left = Math.min(x,mousedown.x);
    rubberbandRect.top = Math.min(y,mousedown.y);
    rubberbandRect.width = Math.abs(x-mousedown.x);
    rubberbandRect.height = Math.abs(y-mousedown.y);

    rubberbandDiv.style.left = rubberbandRect.left+'px';
    rubberbandDiv.style.top = rubberbandRect.top+'px';
    rubberbandDiv.style.width = rubberbandRect.width+'px';
    rubberbandDiv.style.height = rubberbandRect.height+'px';

}

window.onmouseup = function(e){
    dragging = false;
    e.preventDefault();
    var bbox = canvas.getBoundingClientRect();
    context.drawImage(canvas, 
        rubberbandRect.left-bbox.left,
        rubberbandRect.top-bbox.top,
        rubberbandRect.width,
        rubberbandRect.height,
        0,
        0,
        canvas.width,
        canvas.height
    );
    rubberbandRect = {};
    rubberbandDiv.style.width = 0;
    rubberbandDiv.style.height = 0;
    rubberbandDiv.style.display = 'none';
};


function rubberbandStart(){
    rubberbandRect.left = mousedown.x;
    rubberbandRect.top = mousedown.y;

    rubberbandDiv.style.left = rubberbandRect.left+'px';
    rubberbandDiv.style.top = rubberbandRect.top+'px';
    rubberbandDiv.style.display = 'inline';
}

