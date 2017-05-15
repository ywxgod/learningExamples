import {Component, OnInit} from '@angular/core';

@Component({
    selector:"my-app",
    template: require('./app.tmp.html')
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