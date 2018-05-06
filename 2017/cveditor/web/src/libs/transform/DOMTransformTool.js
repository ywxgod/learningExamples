import {TransformTool} from './TransformTool'

export class DOMTransformTool extends TransformTool{

    constructor(container){
        super(container);
    }

    setControls(controls){
        // remove old, persistent svg elements
        if (this.controls){
            var i = 0;
            var n = this.controls.length;
            for (i=0; i<n; i++){
                this.controls[i].undraw(this.container);
            }
        }
        super.setControls(controls);
    }

    shouldDraw(){
        return true;
    }

}