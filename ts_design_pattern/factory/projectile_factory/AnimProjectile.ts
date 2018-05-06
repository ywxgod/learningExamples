import {Projectile} from './Projectile';

export class AnimProjectile extends Projectile{

    protected drawProjectile():void{
        super.drawProjectile();
        this.shape.style.border = `solid 1px #000000`;
    }


}