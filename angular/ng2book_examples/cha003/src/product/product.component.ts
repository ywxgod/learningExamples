import { Product } from './product.vo';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'product',
    template: require('./product.tmp.html')
})
export class ProductComponent{

    @Input()
    product:Product;

    onPriceClick(e:MouseEvent){
        e.stopPropagation();
        console.log(e);
        return false;
    }

}
