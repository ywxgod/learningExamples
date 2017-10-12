import {LineVO} from './LineVO';
import {ShapeType} from '../../consts/ShapeType';

export class HandVO extends LineVO{

    constructor(){
        super();
        this.shapeType = ShapeType.HAND;
    }

}