import { Product } from './product.vo';
import { ProductService } from './product.service';
import { Component } from '@angular/core';

@Component({
    selector: 'product-list',
    styles: [require('./product.module.css')],
    template: `
        <product 
            (click)="onProductClick(product)"
            *ngFor="let product of productList" 
            [class.selected] = "isSelected(product)"
            [product]="product">
        </product>
    `
})
export class ProductListComponent{

    productList:Array<Product>;
    selectProduct:Product;

    constructor(
        private _productService:ProductService
    ){
        this.productList = _productService.products;
        console.log(this.productList);
    }

    onProductClick(product:Product){
        this.selectProduct = product;
    }

    isSelected(product:Product):boolean{
        if(!product||!this.selectProduct) {
            return false;
        }
        return product==this.selectProduct;
    }

}