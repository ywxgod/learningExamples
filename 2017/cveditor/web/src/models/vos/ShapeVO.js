import {ShapeType} from '../../consts/ShapeType';

export class ShapeVO{

    constructor(){
        this.shapeType = ShapeType.SELECT;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

}