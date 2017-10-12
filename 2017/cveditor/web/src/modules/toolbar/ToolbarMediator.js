import {BaseMediator} from 'vue-mec';
import {ShapeType} from '@/consts/ShapeType';
import {DomUtil} from '@/common/utils/DomUtil';
import {SelectTypeCommand} from './cmd/SelectTypeCommand';
import {AppModel} from '@/models/AppModel';

let iconsData = [
    { shapeType: ShapeType.SELECT,          iconName: 'near_me',                    tip: '选择工具' },
    { shapeType: ShapeType.IMAGE,           iconName: 'insert_photo',               tip: '图片工具' },
    { shapeType: ShapeType.LINE,            iconName: 'remove',                     tip: '直线工具' },
    { shapeType: ShapeType.SINGLE_ARROW,    iconName: 'arrow_forward',              tip: '单箭头'   },
    { shapeType: ShapeType.DOUBLE_ARROW,    iconName: 'call_split',                 tip: '双箭头'   },
    { shapeType: ShapeType.HAND,            iconName: 'mode_edit',                  tip: '手型工具' },
    { shapeType: ShapeType.CIRCLE,          iconName: 'radio_button_unchecked',     tip: '圆形工具' },
    { shapeType: ShapeType.RECT,            iconName: 'check_box_outline_blank',    tip: '矩形工具' },
    { shapeType: ShapeType.TEXT,            iconName: 'text_fields',                tip: '文本工具' }
];

let appModel = AppModel.getInstance();

export class ToolbarMediator extends BaseMediator{

    constructor(){
        super(...arguments);
        this._isDown = false;
        this._offsetX = 0;
        this._offsetY = 0;
        this._startX = 0;
        this._startY = 0;
        this._iconContainerHeight = null;
        this._bodyElem = null;
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this)
    }

    data(){
        return {
            showDialog: true,
            selectedShape: appModel.currentTool,
            iconsData: iconsData
        }
    }

    mounted(){
        this._bodyElem = document.querySelector('.dialog-content');
    }

    onIconClick(item){
        this.executeCommand(
            SelectTypeCommand,null,item.shapeType,
            ()=>this.vm.selectedShape = item.shapeType
        );
    }

    onHeaderMouseDown(e){
        e.stopPropagation();
        let pos = DomUtil.getCoords(this._bodyElem);
        this._startX = pos.left;
        this._startY = pos.top;
        this._offsetX = e.pageX-this._startX;
        this._offsetY = e.pageY-this._startY;
        this._dragElem = e.currentTarget;
        this._isDown = true;
        document.addEventListener('mouseup', this.onMouseUp);
        document.addEventListener('mousemove', this.onMouseMove);
    }

    onHeaderDoubleClick(e){
        e.stopPropagation();
        let iconContainer = this.vm.$refs.iconContainer;
        console.log(iconContainer);
        if(this._iconContainerHeight===null){
            this._iconContainerHeight = iconContainer.offsetHeight;
            console.log(this._iconContainerHeight);
        }
        if(iconContainer.offsetHeight>1){
            iconContainer.style.height = '0px';
        }else{
            iconContainer.style.height = this._iconContainerHeight+'px';
        }

    }

    onMouseUp(e){
        this._isDown = false;
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
    }

    onMouseMove(e){
        e.stopPropagation();
        if(!this._isDown){ return; }
        this._bodyElem.style.top = e.pageY-this._offsetY-24+'px';
        this._bodyElem.style.left = e.pageX-this._offsetX-24+'px';
    }


}