import VueMec from 'vue-mec';
import { AppConstant } from "@app/data/AppConstant";
import { Message } from 'element-ui';

const {AjaxCommand,AjaxService} = VueMec;

let headers = {
    Authorization:AppConstant.token
};


export class BaseAjaxCommand extends AjaxCommand{

    showMsg(message,type='error',duration=2000,showClose=true){
        Message({message,type,duration,showClose});
    }

    getService(){
        let service = new AjaxService(this);
        service._axios.defaults.headers.common.Authorization = AppConstant.token;
        return service;
    }

}