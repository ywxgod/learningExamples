import {Component, OnInit} from '@angular/core';

@Component({
    selector:"my-app",
    template: `
        <h1>Hello,Angular - {{appName}}</h1>
        <user-list></user-list>
    `
})
export class AppComponent implements OnInit{

    appName:string;

    constructor(){
        this.appName = 's-s';
        console.log('constructor');
    }

    ngOnInit(){
        console.log('onInit',this.appName);
    }

}