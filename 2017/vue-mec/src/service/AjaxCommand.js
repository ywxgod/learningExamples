import {BaseCommand} from './BaseCommand';

export class AjaxCommand extends BaseCommand{

    constructor(cbObj){
        super();
        this._successCb = cbObj&&cbObj.success;
        this._failCb = cbObj&&cbObj.fail;
        this._context = cbObj&&cbObj.context;
    }

    success(data,response){
        if(this._successCb){
            this._successCb(data, response);
        }
    }

    fail(error){
        if(this._failCb){
            this._failCb(error);
        }
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
    }


}