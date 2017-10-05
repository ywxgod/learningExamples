import {AjaxCommand,AjaxService} from 'vue-mec';

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
    	console.log(data,response);
    }

    fail(error){
        console.log(error);
        super.error(error);
    }

}