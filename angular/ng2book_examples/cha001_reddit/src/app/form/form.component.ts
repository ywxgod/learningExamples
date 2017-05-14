import { Article } from './../article/article.vo';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-form',
    template: require('./form.tmp.html')
})
export class FormComponent {

    @Output()
    onArticleAdd:EventEmitter<Article> = new EventEmitter<Article>();

    constructor(){
        this.onArticleAdd = new EventEmitter<Article>();
    }

    addArticle(newtitle:HTMLInputElement,newlink:HTMLInputElement){
        let title = newtitle.value;
        let link = newlink.value;
        newtitle.value = '';
        newlink.value = '';
        let article:Article = new Article(title,link,0);
        console.log(article);
        this.onArticleAdd.emit(article);
        return false;
    }

}