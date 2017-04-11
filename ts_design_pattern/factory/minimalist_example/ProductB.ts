import IProduct from './IProduct';

class ProductB implements IProduct{

    doSomething(name:string):void{
        console.log(`ProductB: dosomething - ${name}`);
    }

}

export default ProductB;