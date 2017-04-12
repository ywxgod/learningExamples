import BorderShape from './BorderShape';

class FillShape extends BorderShape{
    protected fillColor:string = '#ddd';

    constructor(x:number,y:number,width:number,height:number,borderWidth:number,borderColor:string,fillColor:string){
        super(x,y,width,height,borderWidth,borderColor);
        this.fillColor = fillColor;
    }

    public draw(width:number,height:number):void{
        super.draw(width,height);
        this._div.style.backgroundColor = this.fillColor;
    }
}

export default FillShape;