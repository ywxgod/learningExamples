var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


context.lineWidth = 30;
context.font = '20px Helvetica';
context.strokeStyle = 'rgba(0,0,0,0.5)';
context.fillText('Click anywhere to erase', 275, 140);

context.lineJoin = 'bevel';
context.strokeRect(50,100,170,170);
context.fillStyle = 'green';
context.fillRect(65,115,140,140);

context.lineJoin = 'round';
context.strokeRect(280,100,170,170);
context.fillStyle = 'rgba(255,0,0,0.2)';
context.fillRect(280,100,170,170);

context.lineJoin = 'miter';
context.strokeRect(510,100,170,170);
context.fillStyle = 'blue';
context.fillRect(510,100,170,170);

context.canvas.onmousedown = function(){
    context.clearRect(0,0,canvas.width,canvas.height);
};