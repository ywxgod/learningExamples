import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'test-app',
    template:`
        <div *ngFor="let item of listData">
            <span>{{item}}-{{odd}}</span>
        </div>
    `
})
export class AppComponent{
    
    listData:Array<Number>;

    constructor(){
        this.listData = [1,2,3,4,5];
    }

}