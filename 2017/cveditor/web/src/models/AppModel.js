import {UserVO} from './vos/UserVO';
import {DesignVO} from './vos/DesignVO';
import {ShapeType} from '@/consts/ShapeType';
import {ImageVO} from './vos/ImageVO';
import {LineVO} from './vos/LineVO';
import {SingleArrowVO} from './vos/SingleArrowVO';
import {DoubleArrowVO} from './vos/DoubleArrowVO';
import {HandVO} from './vos/HandVO';
import {CircleVO} from './vos/CircleVO';
import {RectVO} from './vos/RectVO';
import {TextVO} from './vos/TextVO';

export let toolShapeMap = {
    [ShapeType.SELECT]: null,
    [ShapeType.IMAGE]: new ImageVO(),
    [ShapeType.LINE]: new LineVO(),
    [ShapeType.SINGLE_ARROW]: new SingleArrowVO(),
    [ShapeType.DOUBLE_ARROW]: new DoubleArrowVO(),
    [ShapeType.HAND]: new HandVO(),
    [ShapeType.CIRCLE]: new CircleVO(),
    [ShapeType.RECT]: new RectVO(),
    [ShapeType.TEXT]: new TextVO()
}

export class AppModel{

    static _instance = null;

    static getInstance(){
        if(AppModel._instance===null){
            AppModel._instance = new AppModel();
        }
        return AppModel._instance;
    }


    constructor(){
        this.userVo = new UserVO();
        this.design = new DesignVO();
        this.token = '';
        this.shapes = [];
        this.currentTool = ShapeType.SELECT;
        this.currentShape = toolShapeMap[this.currentTool];
    }


}