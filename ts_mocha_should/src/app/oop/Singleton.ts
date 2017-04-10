class Singleton{

    private _name:string='';
    private static _instance:Singleton = new Singleton();

    constructor(){
        if(Singleton._instance){
            throw new Error('Please use getInstance.');
        }
    }

    public static getInstace():Singleton{
        return Singleton._instance;
    }

    public get name():string{
        return this._name;
    }
    public set name(value:string){
        this._name = value;
    }
}

export default Singleton;