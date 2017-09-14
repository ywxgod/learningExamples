import {BaseCommand} from '../service/BaseCommand';

export let baseController = {

    methods:{
        executeCommand(CmdClass, ...params){
            if(!CmdClass) {return;}
            if(typeof CmdClass !== 'function') {return;}
            if(!(CmdClass.prototype instanceof BaseCommand)) {
                throw new Error('Expectes CmdClass as a BaseCommand class.');
            }
            let cmd = new CmdClass();
            return cmd.execute.apply(cmd, params);
        }
    }

};