import {BaseMediator}  from 'vue-mec';
//import {BaseMediator}  from './libs/controller/BaseMediator';
import {GetDataCommand} from './GetDataCommand';

export class AppCtrl extends BaseMediator{

    mounted(){
		
		this.addListener(false,'xxxx', GetDataCommand);
		this.addListener(false,'haha',(data)=>{
			console.log(data);
		});
		console.log('mounted...');
		this.dispatch(false,'xxxx',11,22,33);
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
		super.destroy();
		console.log('destroyed...');
	}
}

