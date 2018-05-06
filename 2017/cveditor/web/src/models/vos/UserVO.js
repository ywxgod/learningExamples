export class UserVO{

    constructor(){
        UserVO.fields.forEach(item=>{
            this[item.c] = '';
        });
    }

    static fields = [
        {b:'userId',c:'userId'},{b:'phone',c:'phone'},
        {b:'email',c:'email'},{b:'registerDate',c:'registerDate'}
    ];

}