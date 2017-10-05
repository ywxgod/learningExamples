import {BaseMediator}  from 'vue-mec';
import {GetDataCommand} from './GetDataCommand';

export class AppCtrl extends BaseMediator{

    mounted(){
        this.addListener(false,'abc', (a,b,c,d,e,f,g)=>{
            console.log(a,b,c,d,e,f,g);
        },1,3,4)
        this.dispatch(false,'abc',6,7,8);

		this.vm.a = 'aaaa';
		
		this.addListener(false,'xxxx', GetDataCommand);

		this.dispatch(false,'xxxx',11,22,33);
    }

    beforeCreate(vm){
        console.log(vm);
	}
	
	onClick(vm,e){
		console.log(vm,e);
	}

    data(){
        return {
            a:1,b:2
        }
    }

    computed(){
        return {
            xx(){
                return this.vm.a+this.vm.b;
            }
        }
    }

    watch(){
        return {
            a(newv,oldv){
                console.log(newv,'a');
            }
        }
	}
	
	destroy(){

	}
}

