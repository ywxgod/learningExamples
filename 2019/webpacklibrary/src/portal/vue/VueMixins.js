import { VueMediator } from "./VueMediator";

export const VueMixins = {

    methods: {

    },
    
    beforeCreate(){
        this.$mediator = new VueMediator();
    },

    mounted(){
        this.$mediator.init();
    },

    beforeDestory(){
        this.$mediator.destory();
        this.$mediator = null;
    }

};