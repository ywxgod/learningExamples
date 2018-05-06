import { RotateAnimProjectile } from './RotateAnimProjectile';
import { AnimProjectile } from './AnimProjectile';
import { HeroProjectile } from './HeroProjectile';
import {Projectile} from './Projectile';

export class ProjectileFactory{

    public static HERO:string = 'hero';
    public static ANIM:string = 'anim';
    public static ROTATE:string = 'rotate';

    protected createProjectile(type:string):Projectile{
        let p:Projectile;
        switch(type){
            case ProjectileFactory.HERO:
                p = new HeroProjectile();
                break;
            case ProjectileFactory.ANIM:
                p = new AnimProjectile();
                break;
            case ProjectileFactory.ROTATE:
                p = new RotateAnimProjectile();
                break;
            default:
                throw new Error('unknow projectile type.'+type);
        }
        return p;
    }

    public file(type:string,speed:number,x:number,y:number,parent:HTMLElement):Projectile{
        let projectile:Projectile = this.createProjectile(type);
        projectile.arm(speed);
        projectile.setPos(x,y);
        parent.appendChild(projectile.getShape());
        projectile.release();
        return projectile;
    }


}