!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("axios"),require("lodash")):"function"==typeof define&&define.amd?define(["axios","lodash"],t):"object"==typeof exports?exports["vue-mec"]=t(require("axios"),require("lodash")):e["vue-mec"]=t(e.axios,e._)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5);(t.EventBus=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,null,[{key:"getInstance",value:function(){return null===t._instance&&(t._instance=new t),t._instance}}]),t}(u.EventDispatcher))._instance=null},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseCommand=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);t.BaseCommand=function(){function e(){r(this,e)}return o(e,[{key:"execute",value:function(){}},{key:"dispatch",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=i.EventBus.getInstance()).$emit.apply(t,[e].concat(r))}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.IDUtil=function(){function e(){r(this,e)}return o(e,null,[{key:"uuid",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseController=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),a=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","activeted","deactivated","beforeDestroy","destroyed"];t.BaseController=function(){function e(t){r(this,e),this.vm=t,this.opt=t.$options,this._$initCtrl(),this._$initVm()}return o(e,[{key:"_$initCtrl",value:function(){this.vm._$ctrls||(this.vm._$ctrls=[]),this.vm._$ctrls.push(this)}},{key:"_$initVm",value:function(){this._$initData(),this._$initWatch(),this._$initMethods(),this._$initComputed(),this._$initLifeCycles()}},{key:"_$initData",value:function(){i.FunUtil.isFun(this.data)&&(this.opt.data=this.data.bind(this,this.vm))}},{key:"_$initWatch",value:function(){if(i.FunUtil.isFun(this.watch)){this.opt.watch=this.watch();for(var e in this.opt.watch)this.opt.watch[e]=this.opt.watch[e].bind(this,this.vm)}}},{key:"_$initMethods",value:function(){var e=this,t=Object.getOwnPropertyNames(this.constructor.prototype),n=["constructor","data","watch","computed"];n=n.concat(a),this.opt.methods||(this.opt.methods={}),t.forEach(function(t){-1===n.indexOf(t)&&(e.opt.methods[t]=e[t].bind(e,e.vm))})}},{key:"_$initComputed",value:function(){if(i.FunUtil.isFun(this.computed)){this.opt.computed=this.computed();for(var e in this.opt.computed)i.FunUtil.isFun(this.opt.computed[e])&&(this.opt.computed[e]=this.opt.computed[e].bind(this,this.vm))}}},{key:"_$initLifeCycles",value:function(){for(var e=a.length,t=0;t<e;t++){var n=a[t];this.opt[n]||(this.opt[n]=[]),i.FunUtil.isFun(this[n])&&this.opt[n].push(this[n].bind(this,this.vm))}}},{key:"beforeDestroy",value:function(){this.destroy()}},{key:"destroy",value:function(){var e=this,t=this.vm._$ctrls.findIndex(this);this.vm._$ctrls.splice(t,1),this.vm.$nextTick(function(){e.vm._$ctrls=null,e.vm=null,e.opt=null})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.FunUtil=function(){function e(){r(this,e)}return o(e,null,[{key:"isFun",value:function(e){return"function"==typeof e}}]),e}()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.EventDispatcher=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=n(1);t.EventDispatcher=function(){function e(){o(this,e),this._evts={}}return i(e,[{key:"$on",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if("function"!=typeof t)throw new Error("expects handler as a function.");var i=a.IDUtil.uuid();return this._evts[i]={type:e,handler:t,data:r},i}},{key:"$off",value:function(e){return!!e&&(!!this._evts[e]&&(this._evts[e]=null,delete this._evts[e]))}},{key:"$emit",value:function(e){for(var t=this.$getEventInfosByType(e),n=t.length,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];for(var c=0;c<n;c++){var s=t[c],f=s.handler,l=s.data;if(f.prototype instanceof u.BaseCommand){var p=new f(i.shift());p.execute.apply(p,[].concat(i))}else{var v=[].concat(r(l),i);f.apply(void 0,r(v))}}}},{key:"$hasEvent",value:function(e){return!!this.$getEventInfosByType(e).length}},{key:"$getEventInfosByType",value:function(e){var t=[];for(var n in this._evts)if(this._evts.hasOwnProperty(n)){var r=this._evts[n].type;r===e&&t.push(this._evts[n])}return t.sort(function(e,t){return e.eId-t.eId})}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=(n.n(r),n(7)),i=(n.n(o),n(5)),a=(n.n(i),n(0)),u=(n.n(a),n(8)),c=(n.n(u),n(9)),s=(n.n(c),n(10)),f=(n.n(s),n(1)),l=(n.n(f),n(2)),p=(n.n(l),n(4));n.n(p);n.o(r,"BaseController")&&n.d(t,"BaseController",function(){return r.BaseController}),n.o(o,"BaseMediator")&&n.d(t,"BaseMediator",function(){return o.BaseMediator}),n.o(i,"EventDispatcher")&&n.d(t,"EventDispatcher",function(){return i.EventDispatcher}),n.o(a,"EventBus")&&n.d(t,"EventBus",function(){return a.EventBus}),n.o(u,"BaseModel")&&n.d(t,"BaseModel",function(){return u.BaseModel}),n.o(c,"AjaxCommand")&&n.d(t,"AjaxCommand",function(){return c.AjaxCommand}),n.o(s,"AjaxService")&&n.d(t,"AjaxService",function(){return s.AjaxService}),n.o(f,"BaseCommand")&&n.d(t,"BaseCommand",function(){return f.BaseCommand}),n.o(l,"IDUtil")&&n.d(t,"IDUtil",function(){return l.IDUtil}),n.o(p,"FunUtil")&&n.d(t,"FunUtil",function(){return p.FunUtil})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMediator=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(r)},c=n(3),s=n(0),f=n(2),l=n(1);t.BaseMediator=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e._evts={},e.beforeCreate&&e.beforeCreate.call(e),e}return i(t,e),a(t,[{key:"executeCommand",value:function(e){if(e&&"function"==typeof e){if(!(e.prototype instanceof l.BaseCommand))throw new Error("Expectes CmdClass as a BaseCommand class.");for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=new e(n.shift());return o.execute.apply(o,[].concat(n))}}},{key:"dispatch",value:function(e,t){var n;if(e||(e=s.EventBus.getInstance()),"function"!=typeof e.$emit)throw new Error("target must extends EventDispatcher or an instance of Vue");for(var r=arguments.length,o=Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];(n=e).$emit.apply(n,[t].concat(o))}},{key:"addListener",value:function(e,t,n){var r;if(e||(e=s.EventBus.getInstance()),"function"!=typeof e.$on)throw new Event("target must extends EventDispatcher or an instance of Vue");for(var o=arguments.length,i=Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];var u=(r=e).$on.apply(r,[t,n].concat(i));return u||(u=f.IDUtil.uuid()),this._evts[u]={target:e,eType:t,callback:n},u}},{key:"removeListener",value:function(e){if(e){var t=this._evts[e];if(t){var n=t.target,r=t.eType,o=t.callback;n.$off(r,o),n.$off(e),delete this._evts[e]}}}},{key:"clearListeners",value:function(){for(var e=Object.getOwnPropertyNames(this._evts),t=e.length,n=0;n<t;n++){var r=e[n];this.removeListener(r)}this._evts={}}},{key:"destroy",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.clearListeners()}}]),t}(c.BaseController)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModel=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);t.BaseModel=function(){function e(){r(this,e),this.evtBus=i.EventBus.getInstance()}return o(e,[{key:"dispatch",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=this.evtBus).$emit.apply(t,[e].concat(r))}},{key:"reset",value:function(){}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxCommand=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1);t.AjaxCommand=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n._successCb=e&&e.success,n._failCb=e&&e.fail,n._context=e&&e.context,n}return i(t,e),a(t,[{key:"success",value:function(e,t){this._successCb&&this._successCb(e,t)}},{key:"fail",value:function(e){this._failCb&&this._failCb(e),e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}}]),t}(u.BaseCommand)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxService=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(11),s=n(12),f=r(s),l=n(13),p=r(l),v=["get","post","delete","put"];t.AjaxService=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e._axios=f.create(p.cloneDeep(t.defaults)),e}return a(t,e),u(t,null,[{key:"defaults",get:function(){return{timeout:3e4}}}]),u(t,[{key:"send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{data:{},params:{}};if(!~v.indexOf(n))throw new Error("invalid method "+n);var o={data:r.data,params:r.params};return this._axios[n](e,o).then(function(e){t.cmd.success.call(t.cmd,e.data,e)}).catch(function(e){t.cmd.fail.call(t.cmd,e)})}}]),t}(c.BaseService)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.BaseService=function(){function e(t){r(this,e),this._cmd=t}return o(e,[{key:"send",value:function(){}},{key:"cmd",get:function(){return this._cmd}}]),e}()},function(t,n){t.exports=e},function(e,n){e.exports=t}])});