import {Transformable} from '@/libs/transform/Transformable';
import {Matrix} from '@/libs/transform/Matrix';

export class Shape{

    constructor(shapeVo){
        let {width,height,x,y} = shapeVo;
        let m = new Matrix(1,0,0,1,x,y);
        this.shapeVo = shapeVo;
        this.transform = new Transformable(width, height, m, this);
        this.transform.changed = this.changed;
        this.svgShape = null;
    }

    draw(canvas){

    }

    changed(){

    }

    apply(){

    }

    toString(){
        console.log(this.shapeVo, this.transform);
    }

}