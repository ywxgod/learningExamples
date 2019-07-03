var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0,0,canvas.width,canvas.height);

gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'red');
gradient.addColorStop(0.35, '#f0f0f0');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(1, '#ffff00');

context.fillStyle = gradient;
context.rect(0,0,canvas.width/2,canvas.height/2);
context.fill();

var radialGradient = context.createRadialGradient(canvas.width/2,canvas.height/2,0,canvas.width/2,canvas.height/2,100);
radialGradient.addColorStop(0,'blue');
radialGradient.addColorStop(1, 'red');
context.fillStyle = radialGradient;
context.rect(0,0,canvas.width,canvas.height);
context.fill();
