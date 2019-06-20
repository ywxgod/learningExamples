import { ActionBus } from "../action/ActionBus";
//import Vue from 'vue';

export class BaseMediator{

    constructor(view){
        this._view = view; 
        this._actionBus = new ActionBus();
        this._listeners = new Map();
    }

    init(){
        
    }

    on(actionType, handler, ...rest){
        let symbol = this._actionBus.on(actionType,handler, ...rest);
        this._listeners.set(symbol,symbol);
        return symbol;
    }

    off(symbol){
        let flag = this._actionBus.off(symbol);
        this._listeners.delete(symbol);
        return flag;
    }

    fire(action, ...rest){
        return this._actionBus.fire(action, ...rest);
    }

    destroy(){
        this._listeners.forEach(v=>{
            this._actionBus.off(v);
        });
        this._listeners.clear();
        this._listeners = new Map();
        this._actionBus = null;
        this._view = null;
    }

}