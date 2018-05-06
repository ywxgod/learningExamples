export class DesignVO{

    constructor(){
        DesignVO.fields.forEach(item=>{
            this[item.c] = '';
        });
    }

    static fields = [
        {b:'designId',c:'designId'},{b:'createdDate',c:'createdDate'},
        {b:'updatedDate',c:'updatedDate'},{b:'data',c:'data'},{b:'designName',c:'designName'}
    ];

}