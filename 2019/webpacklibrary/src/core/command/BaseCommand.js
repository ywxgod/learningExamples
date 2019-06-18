import { ActionBus } from "../action/ActionBus";

export class BaseCommand{

    constructor(){
        this._actionBus = new ActionBus();
    }

    execute(){
        
    }

    fire(action){
        this._actionBus.fire(action);
    }

}