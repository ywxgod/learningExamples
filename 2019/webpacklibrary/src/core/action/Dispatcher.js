import { BaseAction } from "./BaseAction";

export class Dispatcher{

    constructor(){
        this._listeners = new Map();
    }

    fire(action, ...params){
        if(!(action instanceof BaseAction)) throw new Error('action必须是BaseAction的实例');
        let handlers = this._listeners.get(action.actionType);
        if(!handlers) return false;
        let n = handlers.length;
        for(let i=0;i<n;i++){
            let handler = handlers[i].get('handler');
            let rest = handlers[i].get('rest');
            if(!handler) continue;
            handler(...rest,...params,action.actionType,action.payload);
        }
    }

    on(actionType,handler, ...rest){
        if(!actionType) throw new Error('actionType无效');
        if(!this._listeners.has(actionType)){
            this._listeners.set(actionType, []);
        }
        let handlers = this._listeners.get(actionType);
        let info = this._createHandlerInfo(handler,rest);
        handlers.push(info);
        return info.get('symbol');
    }

    off(symbol){
        if(!symbol) return false;
        let flag = false;
        this._listeners.forEach((v,k)=>{
            let index = v.findIndex(i=>{
                return i.get('symbol')===symbol;
            });
            if(index>=0){
                v.splice(index,1);
                flag = true;
                return;
            }
        });
        return flag;
    }

    clear(){
        this._listeners.clear();
        this._listeners = new Map();
    }

    _createHandlerInfo(handler,rest){
        let symbol = Symbol();
        let map = new Map();
        map.set('symbol', symbol);
        map.set('rest', rest);
        map.set('handler', handler);
        return map;
    }

}