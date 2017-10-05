import {FunUtil} from '../utils/FunUtil';

let lifeCycles = [
    'beforeCreate','created','beforeMount','mounted','beforeUpdate',
    'updated','activeted','deactivated','beforeDestroy','destroyed'
];

export class BaseController{

    constructor(vm){
        this.vm = vm;
		this.opt = vm.$options;
		this._$initCtrl();
        this._$initVm();
	}
	
	_$initCtrl(){
		if(!this.vm._$ctrls){
			this.vm._$ctrls = [];
		}
		this.vm._$ctrls.push(this);
	}

    _$initVm(){
        this._$initData();
		this._$initWatch();
		this._$initMethods();
        this._$initComputed();
        this._$initLifeCycles();
    }

    _$initData(){
        if(FunUtil.isFun(this.data)){
            this.opt.data = this.data.bind(this,this.vm);
        }
    }

    _$initWatch(){
        if(FunUtil.isFun(this.watch)){
            this.opt.watch = this.watch();
            for(let i in this.opt.watch){
                this.opt.watch[i] = this.opt.watch[i].bind(this,this.vm);
            }
        }
	}
	
	_$initMethods(){
		let names = Object.getOwnPropertyNames(this.constructor.prototype);
		let reservedNames = ['constructor','data','watch','computed'];
		reservedNames = reservedNames.concat(lifeCycles);
		if(!this.opt.methods) this.opt.methods = {};
		names.forEach((name)=>{
			if(reservedNames.indexOf(name)===-1){
				this.opt.methods[name] = this[name].bind(this,this.vm);
			}
		});
	}

    _$initComputed(){
        if(FunUtil.isFun(this.computed)){
            this.opt.computed = this.computed();
            for(let i in this.opt.computed){
                if(!FunUtil.isFun(this.opt.computed[i])) continue;
                this.opt.computed[i] = this.opt.computed[i].bind(this,this.vm);
            }
        }
    }

    _$initLifeCycles(){
        let n = lifeCycles.length;
        for(let i=0;i<n;i++){
            let funName = lifeCycles[i];
            if(!this.opt[funName]){
                this.opt[funName] = [];
            }
            if(FunUtil.isFun(this[funName])){
                this.opt[funName].push(this[funName].bind(this,this.vm));
            }
        }
	}
	
	beforeDestroy(){
		this.destroy();
	}

	destroy(){
		let index = this.vm._$ctrls.findIndex(this);
		this.vm._$ctrls.splice(index,1);
		this.vm.$nextTick(()=>{
			this.vm._$ctrls = null;
			this.vm = null;
			this.opt = null;
		});
	}





}