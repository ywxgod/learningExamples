import {AjaxCommand,AjaxService} from 'vue-mec';
//import {AjaxCommand} from './libs/service/AjaxCommand';
//import {AjaxService} from './libs/service/AjaxService';
export class GetDataCommand extends AjaxCommand{

    constructor(){
        super(...arguments);
        this._service = new AjaxService(this);
    }

    execute(){
        console.log(arguments);
        let url = 'https://jsonplaceholder.typicode.com/posts';
        this._service.send(url);
    }

    success(data,response){
		this.dispatch('haha',data);
    }

    fail(error){
        console.log(error);
        super.error(error);
    }

}