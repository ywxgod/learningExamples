import {IDUtil} from '../utils/IDUtil';
import {BaseCommand} from '../service/BaseCommand';

export class EventDispatcher{

    constructor(){
        this._evts = {};
    }

    $on(type, handler, ...data){
        if(typeof handler !== 'function'){
            throw new Error('expects handler as a function.');
        }
        let eId = IDUtil.uuid;
        this._evts[eId] = {type,handler,data};
        return eId;
    }

    $off(eId){
        if(!eId) {return false;}
        if(this._evts[eId]){
            this._evts[eId] = null;
            return delete this._evts[eId];
        }
        return false;
    }

    $emit(type, ...payloads){
        let eInfos = this.$getEventInfosByType(type);
        let n = eInfos.length;
        for(let i=0;i<n;i++){
            let {handler,data} = eInfos[i];
			if(handler.prototype instanceof BaseCommand){
				let cmd = new handler(payloads.shift());
				cmd.execute.apply(cmd, [...payloads]);
			}else{
				let args = [...data, ...payloads];
				handler(...args);
			}
        }
    }

    $hasEvent(type){
        let eInfos = this.$getEventInfosByType(type);
        return !!eInfos.length;
    }

    $getEventInfosByType(type){
        let infos = [];
        for(let eId in this._evts){
            if(this._evts.hasOwnProperty(eId)){
                let {type:eType} = this._evts[eId];
                if(eType === type){
                    infos.push(this._evts[eId]);
                }
            }
        }
        return infos.sort((info1,info2)=>{
            return info1.eId - info2.eId;
        });
    }


}