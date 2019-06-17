import { ObjectUtil } from "../../utils/ObjectUtil";

export class BaseAction{

    constructor(actionType,payload={}){
        this.actionType = actionType;
        this.payload = payload;
    }
    
    clone(actionType,payload={}){
        let newPayload = ObjectUtil.deepClone(payload);
        return new BaseAction(actionType,newPayload);
    }

}