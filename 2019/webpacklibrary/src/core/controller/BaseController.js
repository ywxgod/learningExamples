import { BaseCommand } from "../command/BaseCommand";
import { ActionBus } from "../action/ActionBus";

export class BaseController{

    constructor(){
        this._actionBus = new ActionBus();
        this.init();
    }

    init(){

    }

    addCommand(actionType, CommandClass, ...rest){
        if(!(CommandClass.prototype instanceof BaseCommand)){
            throw new Error('CommandClass must instance of BaseCommand.');
        }
        let cmd = new CommandClass();
        let handler = cmd.execute.bind(cmd, ...rest);
        return this._actionBus.on(actionType,handler);
    }

    delCommand(id){
        return this._actionBus.off(id);
    }

}