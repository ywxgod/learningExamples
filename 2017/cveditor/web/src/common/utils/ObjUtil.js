export class ObjUtil{

    static b2c(bObj,cClazz){
        let cObj = new cClazz();
        cClazz.fields.forEach(item=>{
            cObj[item.c] = bObj[item.b];
        });
        return cObj;
    }

    static c2b(cObj){
        let bObj = {};
        let proto = Object.getPrototypeOf(cObj);
        proto.constructor.fields.forEach(item=>{
            bObj[item.b] = cObj[item.c];
        });
        return bObj;
    }


}