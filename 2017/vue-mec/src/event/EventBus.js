import {EventDispatcher} from './EventDispatcher';

class EventBus extends EventDispatcher{

    static _instance = null;
    
    static getInstance(){

        if(EventBus._instance===null){
            EventBus._instance = new EventBus();
        }
        return EventBus._instance;

    }


}

export {EventBus}