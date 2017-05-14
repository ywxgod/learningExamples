import { FormComponent } from './form/form.component';
import { ArticleListComponent } from './article/articleList.component';
import { Article } from './article/article.vo';
import {Component, OnInit} from '@angular/core';

@Component({
    selector:"my-app",
    template: `
        <h1>Hello,Angular - {{appName}}</h1>
        <my-form (onArticleAdd)="onArticleAdd($event)"></my-form>
        <article-list 
            [articles]="articles"></article-list>
    `
})
export class AppComponent implements OnInit{

    appName:string;
    articles: Article[];

    constructor(){
        this.appName = 's-s';
        this.articles = new Array<Article>();
    }

    onArticleAdd(article:Article){
        if(!article){return;}
        this.articles.unshift(article);
    }

    ngOnInit(){
        
    }

}