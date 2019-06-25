var checkbox = document.getElementById('checkbox');
var mousepos = document.getElementsByClassName('mousepos')[0];
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


checkbox.addEventListener('change', function(){
    var value = checkbox.checked;
    if(value){
        canvas.style.width = '1100px';
        canvas.style.height = '800px';
    }else{
        canvas.style.width = 'auto';
        canvas.style.height = 'auto';
    }
});

canvas.addEventListener('mousemove', function(e){
    e.preventDefault();
    var loc = windowToCanvas(e.clientX,e.clientY);
    drawGuideLines(loc);
    updateReadout(loc);
});

function drawGuideLines(loc){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.strokeStyle = 'rgba(0,'+Math.random()*255+','+Math.random()*255+',0.8)';
    context.lineWidth = 0.5;
    drawVerticalLine(loc);
    drawHorizontalLine(loc);
}

function drawVerticalLine(loc){
    context.beginPath();
    context.moveTo(loc.x+0.5,0);
    context.lineTo(loc.x+0.5,canvas.height);
    context.stroke();
}

function drawHorizontalLine(loc){
    context.beginPath();
    context.moveTo(0, loc.y+0.5);
    context.lineTo(canvas.width,loc.y+0.5);
    context.stroke();
}

function updateReadout(loc){
    mousepos.innerHTML = '('+loc.x.toFixed(0)+', '+loc.y.toFixed(0)+')';
}

function windowToCanvas(x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x: (x - bbox.left)*(canvas.width/bbox.width),
        y: (y - bbox.top)*(canvas.height/bbox.height)
    }
}

