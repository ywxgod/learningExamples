import {EventBus} from '../event/EventBus';

export class BaseCommand{

    execute(){

    }

    dispatch(eType,...rest){
        EventBus.getInstance().$emit(eType,...rest);
    }

}