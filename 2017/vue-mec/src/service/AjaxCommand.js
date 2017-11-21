import {BaseCommand} from './BaseCommand';
import {AjaxService} from './AjaxService';

export class AjaxCommand extends BaseCommand{

    getService(){
        let service = new AjaxService(this);
        return service;
    }

    success(response){
        
    }

    fail(error){
        this.showError(error);
    }


}