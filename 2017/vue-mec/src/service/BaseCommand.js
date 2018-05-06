import {EventBus} from '../event/EventBus';

export class BaseCommand{

    execute(){

    }

    showError(error){
        
    }

    $callEvent(target, eType,...rest){
        EventBus.getInstance().$emit(eType,...rest);
    }

}