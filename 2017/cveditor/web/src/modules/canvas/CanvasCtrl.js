import {DomUtil} from '@/common/utils/DomUtil';
import {RectVO} from '@/models/vos/RectVO';
import {Rect} from '@/models/shapes/Rect';
import {AppModel} from '@/models/AppModel';

export let CanvasCtrl = {

    data(){
        let model = AppModel.getInstance();
        return {
            svgCanvas: null,
            shapes: model.shapes
        };
    },

    methods:{
        initSVGCanvas(canvasWidth=800,canvasHeight=600){
            let canvasElem = this.$refs.canvas;
            let position = DomUtil.getCoords(canvasElem);
            let winWidth = window.innerWidth;
            let winHeight = window.innerHeight;
            let h = winHeight - position.top - 40;
            canvasElem.style.height = h+'px';
            if(!this.svgCanvas){
                this.svgCanvas = SVG(canvasElem).size('100%', '100%');
                this.svgCanvas.on('mousedown', this.onSvgCanvasMouseDown);
                this.svgCanvas.on('mouseup', this.onSvgCanvasMouseUp)
                this.svgCanvas.node.style.backgroundColor = '#fff';
            }
            return this.svgCanvas;
        },
        createShapes(){

            

        },
        onWindowResize(){
            this.initSVGCanvas();
        },
        addListeners(){
            window.addEventListener('resize', this.onWindowResize);
        }
    },

    mounted(){
        this.addListeners();
        this.initSVGCanvas();
        //this.createShapes();
    },

    beforeDestroy(){
        window.removeEventListener('resize', this.onWindowResize);
    }


}