import { Article } from './article.vo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'article-item',
    template: require('./article.tmp.html')
})
export class ArticleComponent{

    @Input()
    article: Article;

    @Output()
    onCloseBtnClick:EventEmitter<Article>;
    @Output()
    onArticleChanged:EventEmitter<Article>;

    constructor(){
        this.onCloseBtnClick = new EventEmitter<Article>();
        this.onArticleChanged = new EventEmitter<Article>();
    }

    _onCloseBtnClick(){
        this.onCloseBtnClick.emit(this.article);
    }

    upvote(e:MouseEvent){
        this.article.upvote();
        this.onArticleChanged.emit(this.article);
        return false;
    }

    downvote(e:MouseEvent){
        this.article.downvote();
        this.onArticleChanged.emit(this.article);
        return false;
    }

}