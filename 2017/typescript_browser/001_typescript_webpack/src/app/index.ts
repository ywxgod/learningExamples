import { ObjUtil } from './utils/ObjUtil';

let symbol = Symbol('hoo');
let obj = {a:1,b:2,c:3,[symbol]:5};

let app:HTMLElement = document.getElementById('app');
app.textContent = ObjUtil.getOwnPropertyNames(obj).toString();