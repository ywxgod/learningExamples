import { BaseAction } from "./BaseAction";

export class Dispatcher{

    constructor(){
        this._listeners = new Map();
    }

    fire(action){
        if(!(action instanceof BaseAction)) throw new Error('action必须是BaseAction的实例');
        let handlers = this._listeners.get(action.actionType);
        if(!handlers) return false;
        let n = handlers.length;
        for(let i=0;i<n;i++){
            let handler = handlers[i].get('handler');
            if(!handler) continue;
            handler(action.payload);
        }
    }

    on(actionType,handler){
        if(!actionType) throw new Error('actionType无效');
        if(!this._listeners.has(actionType)){
            this._listeners.set(actionType, []);
        }
        let handlers = this._listeners.get(actionType);
        let info = this._createHandlerInfo(handler);
        handlers.push(info);
        return info.get('symbol');
    }

    off(symbol){
        if(!symbol) return false;
        let flag = false;
        this._listeners.forEach((v,k)=>{
            let index = k.findIndex(i=>{
                return i.get('symbol')===symbol;
            });
            if(index>=0){
                k.splice(index,1);
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

    _createHandlerInfo(handler){
        let symbol = Symbol();
        let map = new Map();
        map.set('symbol', symbol);
        map.set('handler', handler);
        return map;
    }

}