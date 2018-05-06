import {LineVO} from './LineVO';
import {ShapeType} from '../../consts/ShapeType';

export class CircleVO extends LineVO{

    constructor(){
        super();
        this.shapeType = ShapeType.CIRCLE;
        this.fillAlpha = 0.3;
        this.fillColor = '#00f';
    }

}