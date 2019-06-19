import { BaseMediator } from "../../core/mediator/BaseMediator";

export class VueMediator extends BaseMediator{}

export const VueMixins = {

    methods: {
        $dispatch(action){
            this.$mediator.fire(action);
        },
        $attach(actionType, handler, ...rest){
            this.$mediator.on(actionType, handler, ...rest);
        },
        $detach(symbol){
            this.$mediator.off(symbol);
        },
        $init(){
            //单个mediator组合覆盖
        },
        onWindowResize(){
            window&&console.log(window.innerWidth,window.innerHeight);
        }
    },
    
    beforeCreate(){
        this.$mediator = new VueMediator(this);
    },

    mounted(){
        this.$init();
        this.$mediator.init();
        if(this.listenResize){
            window&&window.addEventListener('resize', this.onWindowResize);
        }
    },

    beforeDestory(){
        if(this.listenResize){
            window&&window.removeEventListener('resize', this.onWindowResize);
        }
        this.$mediator.destory();
        this.$mediator = null;
    }

};