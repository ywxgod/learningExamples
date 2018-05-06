import {Shape} from './Shape';
import {ShapeType} from '@/consts/ShapeType';

export class Rect extends Shape{

    constructor(){
        super(...arguments);
    }

    draw(canvas){
        if(this.shapeVo.type!=ShapeType.Rect) {return;}
        let {width,height} = this.shapeVo;
        if(!this.svgShape) {this.svgShape = canvas.rect(width,height);}
        this.apply();
        return this;
    }

    apply(){
        if(!this.svgShape) {return;}
        let {strokeColor,strokeAlpha,strokeWidth,fillColor,fillAlpha} = this.shapeVo;
        let m = this.transform.matrix;
        let {a,b,c,d,x:e,y:f} = m;
        let svgMatrix = new SVG.Matrix({a,b,c,d,e,f});
        this.svgShape.transform(svgMatrix)
            .stroke({
                color: strokeColor,
                opacity: strokeAlpha,
                width: strokeWidth
            })
            .fill({
                color: fillColor,
                opacity: fillAlpha
            })
    }


}