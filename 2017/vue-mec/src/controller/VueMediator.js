import {BaseCommand} from '../service/BaseCommand';
import {BaseMediator} from './BaseMediator';

let isCmd = (CmdClass)=>{
    return CmdClass && (CmdClass.prototype instanceof BaseCommand);
};


export function executeCommand(CmdClass, ...params){
    if(!CmdClass) {return;}
    if(typeof CmdClass !== 'function') {return;}
    if(!isCmd(CmdClass)) throw new Error('invalid command class');
    let cmd = new CmdClass();
    return cmd.execute.apply(cmd, params);
}

export function mapCommands(cmdMap){
    let map = {};
    for(let i in cmdMap){
        let cmdObj = cmdMap[i];
        let CmdClass=null;
        let args=[];
        if(cmdObj.cmd && isCmd(cmdObj.cmd)){
            CmdClass = cmdObj.cmd;
            args = cmdObj.args||[];
            map[i] = function(){
                let oriArgs = [...arguments,this.$data,...args];//原参数+vm.data+传参
                oriArgs = oriArgs.map(item=>{
                    if(typeof item === 'function'){
                        return item.call(this);
                    }
                    return item;
                });
                executeCommand(CmdClass,...oriArgs);
            }
        }else if(isCmd(cmdObj)){
            CmdClass = cmdObj;
            map[i] = function(){
                let oriArgs = [...arguments,this.$data];
                executeCommand(CmdClass,...oriArgs);
            }
        }else{
            throw new Error('unknow command type.');
        }
    }
    return map;
}

export const VueMediator = {

    methods:{
        $attachEvent(){
            return this._mediator.attachEvent(...arguments);
        },
        $callEvent(){
            return this._mediator.callEvent(...arguments);
        },
        $detachEvent(){
            return this._mediator.off(...arguments);
        },
        $mapEvents(){

        }
    },

    mounted(){
        this.$mapEvents();
    },

    beforeCreate(){
        this._mediator = new BaseMediator();
    },

    beforeDestroy(){
        this._mediator.destroy();
        this._mediator = null;
    }

}