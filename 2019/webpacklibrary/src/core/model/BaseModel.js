import { ActionBus } from "../action/ActionBus";

export class BaseModel{

    constructor(){
        this._actionBus = new ActionBus();
        this.initData();
    }

    fire(action, ...rest){
        this._actionBus.fire(action, ...rest);
    }

    //子类覆盖
    initData(){

    }

    reset(){

    }


}