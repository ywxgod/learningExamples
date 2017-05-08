import { HelloWorldModule } from './../components/HelloWorld.m';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,HelloWorldModule],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{

}