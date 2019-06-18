import { ActionBus } from "../action/ActionBus";

export class BaseModel{

    constructor(){
        this._actionBus = new ActionBus();
        this.initData();
    }

    fire(action){
        this._actionBus.fire(action);
    }

    //子类覆盖
    initData(){

    }

    reset(){

    }


}