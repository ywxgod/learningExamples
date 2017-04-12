class Shape{

    protected _x:number=0;
    protected _y:number=0;
    protected _width:number=0;
    protected _height:number=0;
    protected _div:HTMLDivElement;

    constructor(x:number,y:number,width:number,height:number){
        this._div = document.createElement('div') as HTMLDivElement;
        this._div.style.position = 'absolute';
    }

    public draw(width:number,height:number):void{
        this._width = width;
        this._height = height;
        this._div.style.width = width+'px';
        this._div.style.height = width+'px';
    }

    public setPos(x:number,y:number):void{
        this._x = x;
        this._y = y;
        this._div.style.left = x+'px';
        this._div.style.top = y+'px';
    }

    public getShapeElement():HTMLDivElement{
        return this._div;
    }

}

export default Shape;