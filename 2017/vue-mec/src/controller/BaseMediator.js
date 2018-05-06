import {EventBus} from '../event/EventBus';
import {IDUtil} from '../utils/IDUtil';
import {BaseCommand} from '../service/BaseCommand';
import {FunUtil} from '../utils/FunUtil';

export class BaseMediator{

    constructor(){
        this._evts = {};
    }

    callEvent(target,eType,...data){
        if(!target){
            target = EventBus.getInstance();
        }
        if(typeof target.$emit !== 'function'){
            throw new Error('target must extends EventDispatcher or an instance of Vue');
        }
        target.$emit(eType, ...data);
    }

    attachEvent(target,eType,callback,...data){
        if(!target){
            target = EventBus.getInstance();
		}
        if(typeof target.$on !== 'function'){
            throw new Event(`target must extends EventDispatcher or an instance of Vue`)
        }

        let isCmd = callback.prototype instanceof BaseCommand;
        let eInfo = isCmd?this._addCmdMap(target,eType,callback,data):this._addEvtMap(target,eType,callback,data);
        this._evts[eInfo.eId] = eInfo;
        return eInfo.eId;
    }

    _addCmdMap(target,eType,callback,data){
        var cmd = new callback();
		if(!cmd.execute || (typeof cmd.execute !== 'function')) {
			throw new Error('The command must implement method [execute]');
		}
		return this._addEvtMap(target, eType, cmd.execute.bind(cmd), data);
    }

    _addEvtMap(target,eType,callback,data){
        var args = [callback,...data];
        let handler = FunUtil.partial(...args);
        var eId = target.$on(eType, handler);
        if(!eId) eId = IDUtil.uuid();
		return {eId,target,eType,handler};
    }

    off(eId){
        if(!eId){return;}
        let info = this._evts[eId];
        if(!info){return;}
        let {target,eType,callback} = info;
        target.$off(eType,callback);
        target.$off(eId);
        delete this._evts[eId];
    }

    clear(){
        let names = Object.getOwnPropertyNames(this._evts);
        let n = names.length;
        for(let i=0;i<n;i++){
            let name = names[i];
            this.off(name);
        }
        this._evts = {};
    }

    destroy(){
        this.clear();
        this._vm = null;
    }



}