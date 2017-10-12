import {BaseMediator} from 'vue-mec';

export class AppMediator extends BaseMediator{
    data(){
        return {
            isSupportSVG: false
        }
    }

    mounted(){
        this.vm.isSupportSVG = SVG.supported;
    }
}
