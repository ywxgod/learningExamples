import {Projectile} from './Projectile';

export class HeroProjectile extends Projectile{

    protected drawProjectile():void{
        super.drawProjectile();
        this.shape.style.borderRadius = (this.width+2)/2 + 'px';
        this.shape.style.backgroundColor = '#ffff00';
    }

}
