var checkbox = document.getElementById('checkbox');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

checkbox.addEventListener('change', function(){
    var value = checkbox.checked;
    if(value){
        canvas.style.width = '600px';
        canvas.style.height = '300px';
    }else{
        canvas.style.width = 'auto';
        canvas.style.height = 'auto';
    }

});

context.font = '20px sans-serif';
context.textAlign = 'start';
context.textBaseline = 'top';
context.strokeStyle = 'blue';


context.strokeText('What can I do for you?', 0,0);