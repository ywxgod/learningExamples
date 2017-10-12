import {ShapeVO} from './ShapeVO';
import {ShapeType} from '../../consts/ShapeType';
import {TextAlign} from '../../consts/TextAlign';
import {FontStyle} from '../../consts/FontStyle';

export class TextVO extends ShapeVO{

    constructor(){
        super();
        this.shapeType = ShapeType.TEXT;
        this.text = '';
        this.fontFamily = '';
        this.fontSize = 12;
        this.fontColor = '#000';
        this.textAlign = TextAlign.LEFT;
        this.fontStyle = FontStyle.NONE;
    }


}