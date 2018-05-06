import IProduct from './IProduct';

class ProductA implements IProduct{

    doSomething(name:string):void{
        console.log(`ProductA: dosomething - ${name}`);
    }

}

export default ProductA;