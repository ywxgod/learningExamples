import {AppModel} from '@/models/AppModel';
import {ShapeType} from '@/consts/ShapeType';

let appModel = AppModel.getInstance();

export let MouseCtrl = {

    data(){
        return {
            selectedShape:null,
            drawingShape:null
        }
    },

    methods:{
        onSvgCanvasMouseDown(e){
            let currentTool = appModel.currentTool;
            switch(currentTool){
                case ShapeType.SELECT:
                    this.unselectedShapes();
                    break;
                case ShapeType.IMAGE:
                    this.loadImage();
                    break;
                default:
                    this.drawShape(currentTool,e);
                    break;
            }
        },
        loadImage(){},
        drawShape(currentTool,e){
            let currentShapeVo = appModel.currentShape;
            let shape = null;
            switch(currentTool){
                case ShapeType.LINE:
                    shape = this.svgCanvas.line()
                        .stroke({
                            color: currentShapeVo.strokeColor, 
                            opacity: currentShapeVo.strokeAlpha, 
                            width: currentShapeVo.strokeWidth
                        });
                    break;
                case ShapeType.SINGLE_ARROW:
                    break;
                case ShapeType.DOUBLE_ARROW:
                    break;
                case ShapeType.HAND:
                    break;
                case ShapeType.CIRCLE:
                    shape = this.svgCanvas.circle()
                        .stroke({
                            color: currentShapeVo.strokeColor, 
                            opacity: currentShapeVo.strokeAlpha, 
                            width: currentShapeVo.strokeWidth
                        })
                        .fill({
                            color: currentShapeVo.fillColor, 
                            opacity: currentShapeVo.fillAlpha
                        });
                    break;
                case ShapeType.RECT:
                    shape = this.svgCanvas.rect()
                        .stroke({
                            color: currentShapeVo.strokeColor, 
                            opacity: currentShapeVo.strokeAlpha, 
                            width: currentShapeVo.strokeWidth
                        })
                        .fill({
                            color: currentShapeVo.fillColor, 
                            opacity: currentShapeVo.fillAlpha
                        });
                    break;
                case ShapeType.TEXT:
                    break;
            }
            if(!shape) {return;}
            this.drawingShape = shape;
            shape.on('drawstop', this.onDrawStop);
            shape.draw(e);
        },
        onSvgCanvasMouseUp(e){
            if(this.drawingShape){
                this.drawingShape.draw('stop',e);
            }
        },
        onDrawStop(){
            if(!this.drawingShape) {return;}
            let w = this.drawingShape.width();
            let h = this.drawingShape.height();
            this.drawingShape.off('drawstop');
            if(w<=1||h<=1){
                this.drawingShape.remove();
            }
            this.drawingShape.on('mousedown', this.onShapeMouseDown);
        },
        unselectedShapes(){
            if(this.selectedShape){
                this.selectedShape.selectize(false);
            }
        },
        onShapeMouseDown: function(e){
            this.unselectedShapes();
            let id = e.target.getAttribute('id');
            let shape = SVG.get(id);
            shape.draggable();
            shape.selectize().resize();
            this.selectedShape = shape;
            e.stopPropagation();
        }
    }


};