import ProductFactory from './ProductFactory';
import IProduct from './IProduct';
import ProductA from './ProductA';

class ProductAFactory extends ProductFactory{

    createProduct():IProduct{
        return new ProductA();
    }

}

export default ProductAFactory;