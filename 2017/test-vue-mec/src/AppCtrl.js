import {GetDataCommand} from './GetDataCommand';

export let appCtrl = {
    mounted(){
        this.on('abc', (a,b,c,d)=>{
            console.log(a,b,c,d);
        })
        this.executeCommand(GetDataCommand,1,2,3,4);

    }
}