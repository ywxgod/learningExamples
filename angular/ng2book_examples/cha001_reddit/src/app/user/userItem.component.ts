import { Component, Input } from '@angular/core';

@Component({
    selector:'user-item',
    template: require('./userItem.tmp.html')
})
export class UserItemComponent{
    @Input() name:string

    constructor(){
        //this.name = 'Wyin';
    }
}