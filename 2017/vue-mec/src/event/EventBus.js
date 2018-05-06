import {EventDispatcher} from './EventDispatcher';

export class EventBus extends EventDispatcher{

    static _instance = null;
    
    static getInstance(){

        if(EventBus._instance===null){
            EventBus._instance = new EventBus();
        }
        return EventBus._instance;

    }


}