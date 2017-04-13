import {Projectile} from './Projectile';

export class RotateAnimProjectile extends Projectile{

    private deg:number = 0;

    protected move():boolean{
        var flag = super.move();
        if(flag){
            this.deg+=5;
            this.shape.style.transform = 'rotate('+this.deg+'deg)';
        }
        return flag;
    }

    protected drawProjectile(){
        super.drawProjectile();
        this.shape.style.transform = 'rotate(25deg)';
        this.shape.style.backgroundColor = '#ffff00';
    }

}