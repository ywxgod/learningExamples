
export class Projectile{

    protected nSpeed:number = 0;
    protected x:number = 0;
    protected y:number = 0;
    protected shape:HTMLElement;
    protected aniId:number;
    protected width:number = 10;
    protected height:number = 10;


    constructor(){
        this.shape = document.createElement('div') as HTMLElement;
        this.shape.style.position = 'absolute';
        this.shape.style.border = 'solid 1px #000000';
        this.shape.style.width = this.width+'px';
        this.shape.style.height = this.height+'px';
        this.drawProjectile();
    }

    public getShape():HTMLElement{
        return this.shape;
    }

    protected drawProjectile():void{
        //override by subclass.
    }

    public arm(nSpeed:number=5):void{
        this.nSpeed = nSpeed;
    }

    public setPos(x:number,y:number):void{
        this.x = x;
        this.y = y;
        this.shape.style.top = this.y+'px';
        this.shape.style.left = this.x+'px';
    }

    protected move():boolean{
        this.y += this.nSpeed;
        this.shape.style.top = this.y+'px';
        let bodyHeight = window.innerHeight;
        if(this.y<0||this.y>bodyHeight){
            console.log(this.aniId,this.y,this.shape,this.nSpeed);
            cancelAnimationFrame(this.aniId);
            if(this.shape&&this.shape.parentNode) {
                (this.shape.parentNode as HTMLElement).removeChild(this.shape);
                return false;
            }
        }
        return true;
    }

    private _move():void{
        if(!this.move()){return;};
        this.aniId = requestAnimationFrame(this._move.bind(this));
    }

    public release():void{
        this.aniId = requestAnimationFrame(this._move.bind(this));
    }

}