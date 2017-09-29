import {FunUtil} from '../utils/FunUtil';

let lifeCycles = [
    'beforeCreate','created','beforeMount','mounted','beforeUpdate',
    'updated','activeted','deactivated','beforeDestroy','destroyed'
];

export class BaseController{

    constructor(vm){
        this.vm = vm;
        this.opt = vm.$options;
        this._initVm();
    }

    _initVm(){
        this._initData();
        this._initWatch();
        this._initComputed();
        this._initLifeCycles();
    }

    _initData(){
        if(FunUtil.isFun(this.data)){
            this.opt.data = this.data.bind(this);
        }
    }

    _initWatch(){
        if(FunUtil.isFun(this.watch)){
            this.opt.watch = this.watch();
            for(let i in this.opt.watch){
                this.opt.watch[i] = this.opt.watch[i].bind(this);
            }
        }
    }

    _initComputed(){
        if(FunUtil.isFun(this.computed)){
            this.opt.computed = this.computed();
            for(let i in this.opt.computed){
                if(!FunUtil.isFun(this.opt.computed[i])) continue;
                this.opt.computed[i] = this.opt.computed[i].bind(this);
            }
        }
    }

    _initLifeCycles(){
        let n = lifeCycles.length;
        for(let i=0;i<n;i++){
            let funName = lifeCycles[i];
            if(!this.opt[funName]){
                this.opt[funName] = [];
            }
            if(FunUtil.isFun(this[funName])){
                this.opt[funName].push(this[funName].bind(this));
            }
        }
    }





}