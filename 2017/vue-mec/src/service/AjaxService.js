import {BaseService} from './BaseService';
import axios from 'axios';

let methods = ['get','post','delete','put'];

export class AjaxService extends BaseService{

    static _defaults = {
        timeout: 3000
    };

    static get defaults(){
        return AjaxService._defaults;
    };
    static set defaults(value){
        AjaxService._defaults = Object.assign(AjaxService._defaults, value);
    }

    constructor(){
        super(...arguments);
        this._axios = axios.create(Object.assign({},AjaxService.defaults));
    }

    promise(url,method='get',opts={data:{},params:{}}){
        if(!~methods.indexOf(method)){
            throw new Error('invalid method '+ method);
        }
        return this._axios[method](url,opts);
    }

    send(url,method='get',opts={data:{},params:{}}){
        let promise = this.promise(...arguments);
        return promise
            .then(response=>{
                this.cmd.success(response);
            })
            .catch(error=>{
                  this.cmd.fail(error);
            });
    }

    ajax(url,method='get',opts={data:{},params:{}}){
        let promise = this.promise(...arguments);
        return function(success,fail,context){
            context = context||null;
            return promise
                .then(response=>{
                    success&&success.call(context,response);
                    promise = null;
                })
                .catch(error=>{
                    fail&&fail.call(context,error);
                    promise = null;
                });
        }
    }


}