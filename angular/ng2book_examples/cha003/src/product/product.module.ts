import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './productList.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[ProductListComponent,ProductComponent],
    exports: [ProductListComponent],
    imports: [CommonModule],
    providers: [ProductService]
})
export class ProductModel{}