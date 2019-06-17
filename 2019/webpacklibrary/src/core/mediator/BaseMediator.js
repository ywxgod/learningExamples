import { ActionBus } from "../action/ActionBus";

export class BaseMediator{

    constructor(){
        this._actionBus = new ActionBus();
        this.init();
    }

    init(){

    }

    mapAction(actionType, handler){

    }

    destroy(){

    }

}