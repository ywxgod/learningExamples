import ShapeFactory,{IShape} from './factory/ShapeFactory';
import Shape from './factory/Shape';

let factory = new ShapeFactory();
let body:HTMLBodyElement = document.body as HTMLBodyElement;


function getRandomColor(n){
    let c = '';
    let s = '0123456789ABCDEF';
    for(let i=0;i<n;i++){
        let b = s[Math.floor(Math.random()*s.length)];
        c+=b;
    }
    return '#'+c;
}

let numOfShapes:number = 50;
let shapes:Array<Shape> = new Array<Shape>();
for(let i=0;i<numOfShapes;i++){
    let shapeInfo = {
        x:Math.random()*800,
        y:Math.random()*500,
        width: Math.floor(Math.random()*100),
        height: Math.floor(Math.random()*100),
        borderWidth: Math.floor(Math.random()*3+1),
        borderColor: getRandomColor(6),
        fillColor: getRandomColor(6),
    };
    let type = [ShapeFactory.BORDER,ShapeFactory.FILL,ShapeFactory.CIRCLE][Math.floor(Math.random()*3)]
    factory.draw(type,body,shapeInfo);
}