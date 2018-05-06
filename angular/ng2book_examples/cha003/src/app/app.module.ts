import { ProductModel } from './../product/product.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import './app.css';

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule, ProductModel],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{

}