import { AxiosService } from "./AxiosService";

export class BaseService{

    static getService(type='axios'){
        let service = null;
        switch(type){
            case 'axios':
                service = new AxiosService();
                break;
            case 'jquery':
                //jquery ajax implementation
                break;
            default:
                service = new AxiosService();
                break;
        }
        return service;
    }

    constructor(cmd){
        this._cmd = cmd;
    }

    get cmd(){ return this._cmd; }

    send(){

    }


}