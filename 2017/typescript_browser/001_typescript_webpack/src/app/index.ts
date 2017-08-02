import { ObjUtil } from './utils/ObjUtil';
import * as $ from 'jquery';
import * as _ from 'lodash';

let a1 = [1,2,3,4,5];
let a2 = [2,3,4,8,9];

//a1被删掉了哪些元素
let r = _.difference(a1,a2);
console.log(r);
//a1新增了哪些元素
let r2 = _.difference(a2, a1);
console.log(r2);



let symbol = Symbol('hoo');
let obj:{[s:string]:number} = {a:1,b:2,c:3,[symbol]:5};

let app:HTMLElement = document.getElementById('app');
//app.textContent = ObjUtil.getOwnPropertyNames(obj).toString();
$('#app').text(ObjUtil.getOwnPropertyNames(obj).toString());
console.log(_.keys(obj));