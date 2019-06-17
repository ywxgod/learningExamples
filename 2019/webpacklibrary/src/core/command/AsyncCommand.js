import { BaseCommand } from "./BaseCommand";

export class AsyncCommand extends BaseCommand{

    constructor(){
        super(...arguments);
    }

    success(data,response){

    }

    fail(error){

    }

}