import {ShapeVO} from './ShapeVO';
import {ShapeType} from '../../consts/ShapeType';

export class LineVO extends ShapeVO{

    constructor(){
        super();
        this.shapeType = ShapeType.LINE;
        this.strokeColor = '#000';
        this.strokeAlpha = 1;
        this.strokeWidth = 1;
    }


}