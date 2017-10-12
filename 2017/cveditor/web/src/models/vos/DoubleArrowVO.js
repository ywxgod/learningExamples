import {LineVO} from './LineVO';
import {ShapeType} from '../../consts/ShapeType';

export class DoubleArrowVO extends LineVO{

    constructor(){
        super();
        this.shapeType = ShapeType.DOUBLE_ARROW;
    }

}