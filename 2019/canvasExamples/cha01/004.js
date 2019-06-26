var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.onkeydown = function(e){
    console.log('keydown',e);
};
canvas.onkeyup = function(e){
    console.log('keyup',e);
};

document.addEventListener('keydown', function(e){
    console.log('keydown',e);
});

document.addEventListener('keyup', function(e){
    console.log('keyup',e);
});

document.addEventListener('keypress', function(e){
    console.log('keypress',e);
});