import { ArticleComponent } from './article.component';
import { Article } from './article.vo';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'article-list',
    template: `
        <div class="pure-g article-item">
            <div class="pure-u-1">
                <article-item 
                    *ngFor="let article of articles" 
                    (onCloseBtnClick)="onCloseArticle($event)"
                    [article]="article">
                </article-item>
            </div>
        </div>
    `
})
export class ArticleListComponent{

    @Input()
    articles: Article[];

    constructor(){

    }

    onCloseArticle(article:Article){
        console.log(article,'+++');
        let n = this.articles.length;
        for(let i=0;i<n;i++){
            if(this.articles[i]==article){
                this.articles.splice(i,1);
                break;
            }
        }
    }

}