import Shape from './Shape';

class BorderShape extends Shape{
    protected borderWidth:number=1;
    protected borderColor:string='#000000';

    constructor(x:number,y:number,width:number,height:number,borderWidth:number,borderColor:string){
        super(x,y,width,height);
        this.borderColor = borderColor;
        this.borderWidth = borderWidth;
    }

    public draw(width:number,height:number):void{
        super.draw(width,height);
        this._div.style.border = `solid ${this.borderWidth}px ${this.borderColor}`;
    }
}

export default BorderShape;