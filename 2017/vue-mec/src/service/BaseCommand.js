import {EventBus} from '../event/EventBus';

export class BaseCommand{

    execute(){

    }

    dispatchEvent(eType,...rest){
        EventBus.getInstance().emit(eType,...rest);
    }

}