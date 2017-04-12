import FillShape from './FillShape';

class CircleShape extends FillShape{

    public draw(width:number,height:number):void{
        super.draw(width,width);
        this._div.style.borderRadius = (this.borderWidth+width)/2+'px';
    }

    public setPos(x:number,y:number):void{
        x = x-this._width/2;
        y = y-this._width/2;
        super.setPos(x,y);
    }

}

export default CircleShape;