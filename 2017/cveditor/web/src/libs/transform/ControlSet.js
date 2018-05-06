import {Control} from './Control';

export class ControlSet{

    static controlClass = Control;

    static getStandard(){
        var translater = new this.controlClass(Control.TRANSLATE);
        translater.hitTestTarget = true;
        
        return [
            new this.controlClass(Control.BORDER),
            translater,
            new this.controlClass(Control.ROTATE, 0,0, 0,0, 10),
            new this.controlClass(Control.ROTATE, 0,1, 0,0, 10),
            new this.controlClass(Control.ROTATE, 1,0, 0,0, 10),
            new this.controlClass(Control.ROTATE, 1,1, 0,0, 10),
            new this.controlClass(Control.SCALE_X, 0,.5, 0,0, 10),
            new this.controlClass(Control.SCALE_X, 1,.5, 0,0, 10),
            new this.controlClass(Control.SCALE_Y, .5,0, 0,0, 10),
            new this.controlClass(Control.SCALE_Y, .5,1, 0,0, 10)
        ];	
    }

    static getScaler(){
        var translater = new this.controlClass(Control.TRANSLATE);
        translater.hitTestTarget = true;
        
        return [
            new this.controlClass(Control.BORDER),
            translater,
            new this.controlClass(Control.SCALE, 0,0, 0,0, 10),
            new this.controlClass(Control.SCALE, 0,1, 0,0, 10),
            new this.controlClass(Control.SCALE, 1,0, 0,0, 10),
            new this.controlClass(Control.SCALE, 1,1, 0,0, 10),
            new this.controlClass(Control.SCALE_X, 0,.5, 0,0, 10),
            new this.controlClass(Control.SCALE_X, 1,.5, 0,0, 10),
            new this.controlClass(Control.SCALE_Y, .5,0, 0,0, 10),
            new this.controlClass(Control.SCALE_Y, .5,1, 0,0, 10)
        ];	
    }

    static getUniformScaler(){
        var translater = new this.controlClass(Control.TRANSLATE);
        translater.hitTestTarget = true;
        
        return [
            new this.controlClass(Control.BORDER),
            translater,
            new this.controlClass(Control.SCALE_UNIFORM, 0,0, 0,0, 10),
            new this.controlClass(Control.SCALE_UNIFORM, 0,1, 0,0, 10),
            new this.controlClass(Control.SCALE_UNIFORM, 1,0, 0,0, 10),
            new this.controlClass(Control.SCALE_UNIFORM, 1,1, 0,0, 10)
        ];	
    }

    static getScalerWithRotate(){
        var translater = new this.controlClass(Control.TRANSLATE, 0, 0, 0, 0, -1);
        // translate control is "selected" by clicking
        // on the target's shape, not the control point
        translater.hitTestTarget = true;
        
        return [
            new this.controlClass(Control.BORDER),
            translater,
            new this.controlClass(Control.ROTATE, .5,0, 0,-20, 10),
            new this.controlClass(Control.SCALE, 0,0, 0,0, 10),
            new this.controlClass(Control.SCALE, 0,1, 0,0, 10),
            new this.controlClass(Control.SCALE, 1,0, 0,0, 10),
            new this.controlClass(Control.SCALE, 1,1, 0,0, 10),
            new this.controlClass(Control.SCALE_X, 0,.5, 0,0, 10),
            new this.controlClass(Control.SCALE_X, 1,.5, 0,0, 10),
            new this.controlClass(Control.SCALE_Y, .5,0, 0,0, 10),
            new this.controlClass(Control.SCALE_Y, .5,1, 0,0, 10)
        ];	
    }

    static getDynamic(){
        var dyn = new this.controlClass(Control.TRANSLATE);
        dyn.dynamicUV = true;
        dyn.hitTestTarget = true;
        
        return [
            new this.controlClass(Control.BORDER),
            dyn
        ];	
    }

}