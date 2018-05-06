import { Component } from '@angular/core';

@Component({
    selector: 'user-list',
    template: require('./userList.tmp.html')
})
export class UserListComponent{
    names: string[];

    constructor(){
        this.names = ['宋江','李逵','燕青','武松'];
    }
}