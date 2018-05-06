import {ShapeVO} from './ShapeVO';
import {ShapeType} from '../../consts/ShapeType';

export class ImageVO extends ShapeVO{

    constructor(){
        super();
        this.shapeType = ShapeType.IMAGE;
        this.src = '';
    }
}