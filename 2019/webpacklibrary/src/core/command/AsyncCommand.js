import { BaseCommand } from "./BaseCommand";
import { BaseService } from "../service/BaseService";


export class AsyncCommand extends BaseCommand{

    constructor(){
        super(...arguments);
    }

    get service(){return BaseService.getService();}

    success(data,response){

    }

    fail(error){

    }

}