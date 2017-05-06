import {Component, OnInit} from '@angular/core';

@Component({
    selector:"my-app",
    template: `<h1>Hello,Angular - {{appName}}</h1>`
})
export class AppComponent implements OnInit{

    appName:string;

    constructor(){
        this.appName = 'sss';
        console.log('constructor');
    }

    ngOnInit(){
        console.log('onInit',this.appName);
    }

}