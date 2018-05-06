import ProductFactory from './ProductFactory';
import IProduct from './IProduct';
import ProductB from './ProductB';

class ProductBFactory extends ProductFactory{

    createProduct():IProduct{
        return new ProductB();
    }

}

export default ProductBFactory;