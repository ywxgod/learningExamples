import IProduct from './IProduct';

abstract class ProductFactory{
    
    createProduct():IProduct{
        throw new Error('should call by subclass.');
    }

    doSomething(name):void{
        let product:IProduct = this.createProduct();
        product.doSomething(name);
    }
}

export default ProductFactory;