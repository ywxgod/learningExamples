import { Product } from './product.vo';
import {Injectable} from '@angular/core';


@Injectable()
export class ProductService{

    private _products: Product[];
    private _baseImgUrl:string = 'src/common/images/';

    constructor(){
        this._products = this._getProducts();
    }

    get products():Array<Product>{
        return this._products;
    }

    private _createImgName(i:number):string{
        i = i+1;
        let name:string = '';
        if(i<10){
            name = '0'.repeat(2)+i;
        }else{
            name = '0'+i;
        }
        return name;
    }

    private _getProducts():Array<Product>{
        let n = 11;
        let re = new Array<Product>();
        for(let i=0;i<n;i++){
            let imageUrl = this._baseImgUrl+this._createImgName(i)+'.jpg';
            let sku = ['sku1','sku2','sku3','sku4','sku5'][Math.floor(Math.random()*5)];
            let name = 'name'+i;
            let department = ['a','b','c'];
            let price = (i+1)*100;
            let product = new Product(sku,name,imageUrl,department,price);
            re[i] = product;
        }
        return re;
    }

}