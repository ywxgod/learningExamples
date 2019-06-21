var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.font = '38px sans-serif';
context.textAlign = 'start';
context.textBaseline = 'top';
context.strokeStyle = 'blue';


context.strokeText('What can I do for you?', canvas.width/2,canvas.height/2);