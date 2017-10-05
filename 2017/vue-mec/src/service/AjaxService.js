import {BaseService} from './BaseService';
import * as axios from 'axios';
import * as _ from 'lodash';

let methods = ['get','post','delete','put'];

export class AjaxService extends BaseService{

    static get defaults() {
        return {
            timeout: 30000
        }
    };

    constructor(){
        super(...arguments);

        this._axios = axios.create(_.cloneDeep(AjaxService.defaults));
    }

    send(url,method='get',opts={data:{},params:{}}){
        if(!~methods.indexOf(method)){
            throw new Error('invalid method '+ method);
        }
        let options = {
            data: opts.data,
            params: opts.params
        }
        return this._axios[method](url, options)
            .then(response=>{
                this.cmd.success.call(this.cmd, response.data, response);
            })
            .catch(error=>{
                  this.cmd.fail.call(this.cmd, error);
            });
    }


}