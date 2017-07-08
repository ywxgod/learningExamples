import { ObjUtil } from './utils/ObjUtil';
import * as $ from 'jquery';
import * as _ from 'lodash';

console.log(_);

let symbol = Symbol('hoo');
let obj = {a:1,b:2,c:3,[symbol]:5};

let app:HTMLElement = document.getElementById('app');
//app.textContent = ObjUtil.getOwnPropertyNames(obj).toString();
$('#app').text(ObjUtil.getOwnPropertyNames(obj).toString());
console.log(_.keys(obj));