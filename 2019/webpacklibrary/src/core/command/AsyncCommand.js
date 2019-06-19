import { BaseCommand } from "./BaseCommand";
import { Service } from "../service/Service";


export class AsyncCommand extends BaseCommand{

    constructor(serviceType){
        super(...arguments);
        this._serviceType = serviceType;
    }

    get service(){return Service.getService(this._serviceType,this);}

    success(data,response){

    }

    fail(error){

    }

}