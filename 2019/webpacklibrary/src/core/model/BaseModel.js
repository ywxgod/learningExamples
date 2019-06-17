import { ActionBus } from "../action/ActionBus";

export class BaseModel{

    constructor(){
        this._actionBus = new ActionBus();
        this.initData();
    }

    commit(actionType,payload){
        this._actionBus.callAction(actionType, payload);
    }

    //子类覆盖
    initData(){

    }

    reset(){

    }


}