import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './articleList.component';
import { ArticleComponent } from './article.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ArticleComponent,ArticleListComponent],
    imports: [CommonModule],
    exports: [ArticleListComponent]
})
export class ArticleModule{}