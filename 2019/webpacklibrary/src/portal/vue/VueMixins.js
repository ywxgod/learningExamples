import { BaseMediator } from "../../core/mediator/BaseMediator";

export class VueMediator extends BaseMediator{}

export const VueMixins = {

    methods: {
        $dispatch(action){
            this.$mediator.fire(action);
        },
        $attach(actionType, handler){
            this.$mediator.on(actionType, handler);
        },
        $detach(symbol){
            this.$mediator.off(symbol);
        },
        $init(){

        }
    },
    
    beforeCreate(){
        this.$mediator = new VueMediator();
    },

    mounted(){
        this.$init();
    },

    beforeDestory(){
        this.$mediator.destory();
        this.$mediator = null;
    }

};