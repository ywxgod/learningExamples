import {CircleVO} from './CircleVO';
import {ShapeType} from '../../consts/ShapeType';

export class RectVO extends CircleVO{

    constructor(){
        super();
        this.shapeType = ShapeType.RECT;
    }

}