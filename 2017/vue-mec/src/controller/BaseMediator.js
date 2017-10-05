import {BaseController} from './BaseController';
import {EventBus} from '../event/EventBus';
import {IDUtil} from '../utils/IDUtil';
import {BaseCommand} from '../service/BaseCommand';

export class BaseMediator extends BaseController{

    constructor(){
        super(...arguments);
        this._evts = {};
        if(this.beforeCreate){
            this.beforeCreate.call(this)
        }
    }

    executeCommand(CmdClass, ...params){
        if(!CmdClass) {return;}
        if(typeof CmdClass !== 'function') {return;}
        if(!(CmdClass.prototype instanceof BaseCommand)) {
            throw new Error('Expectes CmdClass as a BaseCommand class.');
        }
        let cmd = new CmdClass(params.shift());
        return cmd.execute.apply(cmd, [...params]);
    }

    dispatch(target,eType,...data){
        if(!target){
            target = EventBus.getInstance();
        }
        if(typeof target.$emit !== 'function'){
            throw new Error('target must extends EventDispatcher or an instance of Vue');
        }
        target.$emit(eType, ...data);
    }

    addListener(target,eType,callback,...data){
        if(!target){
            target = EventBus.getInstance();
		}
        if(typeof target.$on !== 'function'){
            throw new Event(`target must extends EventDispatcher or an instance of Vue`)
        }
        let eId = target.$on(eType,callback,...data);
        if(!eId){eId = IDUtil.uuid();}
        this._evts[eId] = {target,eType,callback};
        return eId;
    }

    removeListener(eId){
        if(!eId){return;}
        let info = this._evts[eId];
        if(!info){return;}
        let {target,eType,callback} = info;
        target.$off(eType,callback);
        target.$off(eId);
        delete this._evts[eId];
    }

    clearListeners(){
        let names = Object.getOwnPropertyNames(this._evts);
        let n = names.length;
        for(let i=0;i<n;i++){
            let name = names[i];
            this.removeListener(name);
        }
        this._evts = {};
    }

    destroy(){
		super.destroy();
		this.clearListeners();
    }



}