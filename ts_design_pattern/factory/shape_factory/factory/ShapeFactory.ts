import Shape from './Shape';
import BorderShape from './BorderShape';
import FillShape from './FillShape';
import CircleShape from './CircleShape';

export interface IShape{
    x:number;
    y:number;
    width:number;
    height:number;
    borderWidth?:number;
    borderColor?:string;
    fillColor?:string;
}

class ShapeFactory{

    public static BORDER:string = 'border';
    public static FILL:string = 'fill';
    public static CIRCLE:string = 'circle';

    public draw(type:string,parent:HTMLElement,shapeInfo:IShape):void{
        let shape:Shape|null = this.createShape(type,shapeInfo);
        if(!shape){return;}
        parent.appendChild(shape.getShapeElement());
        shape.draw(shapeInfo.width,shapeInfo.height);
        shape.setPos(shapeInfo.x,shapeInfo.y);
    }

    private createShape(type:string,shapeInfo:IShape):Shape|null{
        let shape:Shape|null = null;
        let x:number = shapeInfo.x;
        let y:number = shapeInfo.y;
        let width:number = shapeInfo.width;
        let height:number = shapeInfo.height;
        let borderWidth:number = shapeInfo.borderWidth||0;
        let borderColor:string = shapeInfo.borderColor||'';
        let fillColor:string = shapeInfo.fillColor||'';
        switch(type){
            case ShapeFactory.BORDER:
                shape = new BorderShape(x,y,width,height,borderWidth,borderColor);
                break;
            case ShapeFactory.FILL:
                shape = new FillShape(x,y,width,height,borderWidth,borderColor,fillColor);
                break;
            case ShapeFactory.CIRCLE:
                shape = new CircleShape(x,y,width,height,borderWidth,borderColor,fillColor);
                break;
        }
        return shape;
    }

}

export default ShapeFactory;