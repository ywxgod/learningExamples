import { ArticleModule } from './article/article.module';
import { TFormModule } from './form/form.module';
import { UserModule } from './user/user.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import './app.css';

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,UserModule,TFormModule,ArticleModule],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{

}