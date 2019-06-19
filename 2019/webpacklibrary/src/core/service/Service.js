import { AxiosService } from "./AxiosService";

export class Service{

    static getService(type='axios',cmd){
        let service = null;
        switch(type){
            case 'axios':
                service = new AxiosService(cmd);
                break;
            case 'jquery':
                //jquery ajax implementation
                break;
            default:
                service = new AxiosService(cmd);
                break;
        }
        return service;
    }


}