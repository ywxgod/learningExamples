import {EventBus} from './EventBus';

let evtBus = EventBus.getInstance();

export let event = {

    data(){
        return {
            $eIds:[]
        };
    },

    methods:{
        emit(type, ...payloads){
            evtBus.emit(type, ...payloads);
        },
        on(type, ...data){
            let eId = evtBus.on(type, ...data);
            this.$data.$eIds.push(eId);
            return eId;
        },
        off(eId){
            return evtBus.off(eId);
        },
        hasEvent(type){
            return this.evtBus.hasEvent(type);
        }
    },

    beforeDestroy(){
        this.$data.$eIds.forEach(function(eId) {
            this.evtBus.off(eId);
        }, this);
        this.$data.$eIds = [];
    }

};