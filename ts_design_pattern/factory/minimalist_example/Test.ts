import ProductAFactory from './ProductAFactory';
import ProductBFactory from './ProductBFactory';

class Test {

    constructor(){

        let factoryA = new ProductAFactory();
        factoryA.doSomething('factoryA...');
        let factoryB = new ProductBFactory();
        factoryB.doSomething('factoryB...');

    }

}

let test = new Test();
