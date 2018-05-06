import {LineVO} from './LineVO';
import {ShapeType} from '../../consts/ShapeType';

export class SingleArrowVO extends LineVO{

    constructor(){
        super();
        this.shapeType = ShapeType.SINGLE_ARROW;
    }

}