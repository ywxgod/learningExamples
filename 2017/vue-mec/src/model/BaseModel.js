import {EventBus} from '../event/EventBus';

export class BaseModel{
    constructor(){
        this.evtBus = EventBus.getInstance();        
    }

    dispatch(eType,...rest){
        this.evtBus.$emit(eType,...rest);
    }

    reset(){
        
    }


}