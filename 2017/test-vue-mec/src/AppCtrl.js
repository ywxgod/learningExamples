import {GetDataCommand} from './GetDataCommand';
import * as VueMec from 'vue-mec';

class AppCtrl extends VueMec.BaseMediator{

    mounted(){
        this.addListener(false,'abc', (a,b,c,d,e,f,g)=>{
            console.log(a,b,c,d,e,f,g);
        },1,3,4)
        this.executeCommand(GetDataCommand,1,2,3,4);
        this.dispatchEvent(false,'abc',6,7,8);

        this.vm.a = 'aaaa';
    }

    beforeCreate(){
        console.log(this.vm);
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
            },
            yy:{
                get:()=>{
                    return 'yy'
                },
                set:(val)=>{
                    this.vm.a = 100;
                }
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
}

export {AppCtrl};
