(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("axios")) : factory(root["axios"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventBus = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseCommand = exports.BaseCommand = function () {
    function BaseCommand() {
        _classCallCheck(this, BaseCommand);
    }

    _createClass(BaseCommand, [{
        key: 'execute',
        value: function execute() {}
    }, {
        key: 'showError',
        value: function showError(error) {}
    }, {
        key: '$callEvent',
        value: function $callEvent(target, eType) {
            var _EventBus$getInstance;

            for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
            }

            (_EventBus$getInstance = _EventBus.EventBus.getInstance()).$emit.apply(_EventBus$getInstance, [eType].concat(rest));
        }
    }]);

    return BaseCommand;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventBus = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventDispatcher2 = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventBus = exports.EventBus = function (_EventDispatcher) {
    _inherits(EventBus, _EventDispatcher);

    function EventBus() {
        _classCallCheck(this, EventBus);

        return _possibleConstructorReturn(this, (EventBus.__proto__ || Object.getPrototypeOf(EventBus)).apply(this, arguments));
    }

    _createClass(EventBus, null, [{
        key: 'getInstance',
        value: function getInstance() {

            if (EventBus._instance === null) {
                EventBus._instance = new EventBus();
            }
            return EventBus._instance;
        }
    }]);

    return EventBus;
}(_EventDispatcher2.EventDispatcher);

Object.defineProperty(EventBus, '_instance', {
    enumerable: true,
    writable: true,
    value: null
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IDUtil = exports.IDUtil = function () {
    function IDUtil() {
        _classCallCheck(this, IDUtil);
    }

    _createClass(IDUtil, null, [{
        key: 'uuid',
        value: function uuid() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
            return uuid;
        }
    }]);

    return IDUtil;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FunUtil = exports.FunUtil = function () {
	function FunUtil() {
		_classCallCheck(this, FunUtil);
	}

	_createClass(FunUtil, null, [{
		key: 'isFun',
		value: function isFun(obj) {
			return typeof obj === 'function';
		}
	}, {
		key: 'partial',
		value: function partial() {
			var args = Array.prototype.slice.call(arguments);
			var fun = args[0];
			args.shift();
			if (typeof fun !== 'function') {
				return;
			}
			return function () {
				return fun.apply(this, [].concat(_toConsumableArray(args), Array.prototype.slice.call(arguments)));
			};
		}
	}, {
		key: 'single',
		value: function single(source) {
			var instance = null;
			var t = function t(config) {
				if (!instance) instance = new source({});
				return instance;
			};
			t.prototype = source.prototype;
			t.prototype.constructor = source;
			return t;
		}
	}]);

	return FunUtil;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AjaxService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseService2 = __webpack_require__(11);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var methods = ['get', 'post', 'delete', 'put'];

var AjaxService = exports.AjaxService = function (_BaseService) {
    _inherits(AjaxService, _BaseService);

    _createClass(AjaxService, null, [{
        key: 'defaults',
        get: function get() {
            return AjaxService._defaults;
        },
        set: function set(value) {
            AjaxService._defaults = Object.assign(AjaxService._defaults, value);
        }
    }]);

    function AjaxService() {
        _classCallCheck(this, AjaxService);

        var _this = _possibleConstructorReturn(this, (AjaxService.__proto__ || Object.getPrototypeOf(AjaxService)).apply(this, arguments));

        _this._axios = _axios2.default.create(Object.assign({}, AjaxService.defaults));
        return _this;
    }

    _createClass(AjaxService, [{
        key: 'send',
        value: function send(url) {
            var _this2 = this;

            var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { data: {}, params: {} };

            if (!~methods.indexOf(method)) {
                throw new Error('invalid method ' + method);
            }
            return this._axios[method](url, opts).then(function (response) {
                _this2.cmd.success(response);
            }).catch(function (error) {
                _this2.cmd.fail(error);
            });
        }
    }]);

    return AjaxService;
}(_BaseService2.BaseService);

Object.defineProperty(AjaxService, '_defaults', {
    enumerable: true,
    writable: true,
    value: {
        timeout: 3000
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* import {VueMediator,executeCommand,mapCommands} from './src/controller/VueMediator';
import {EventBus} from './src/event/EventBus';
import {BaseModel} from './src/model/BaseModel';
import {AjaxCommand} from './src/service/AjaxCommand';
import {AjaxService} from './src/service/AjaxService';
import {BaseCommand} from './src/service/BaseCommand';
import {SimpleCommand} from './src/service/SimpleCommand';
import {IDUtil} from './src/utils/IDUtil'; */
//import {FunUtil} from './src/utils/FunUtil';
var VueMediatorObj = __webpack_require__(6);
var EventBus = exports.EventBus = __webpack_require__(1);
var BaseModel = exports.BaseModel = __webpack_require__(9);
var AjaxCommand = exports.AjaxCommand = __webpack_require__(10);
var AjaxService = exports.AjaxService = __webpack_require__(4);
var BaseCommand = exports.BaseCommand = __webpack_require__(0);
var SimpleCommand = exports.SimpleCommand = __webpack_require__(13);
var IDUtil = exports.IDUtil = __webpack_require__(2);
var FunUtil = exports.FunUtil = __webpack_require__(3);
var VueMediator = exports.VueMediator = VueMediatorObj.VueMediator;
var executeCommand = exports.executeCommand = VueMediatorObj.executeCommand;
var mapCommands = exports.mapCommands = VueMediatorObj.mapCommands;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VueMediator = undefined;
exports.executeCommand = executeCommand;
exports.mapCommands = mapCommands;

var _BaseCommand = __webpack_require__(0);

var _BaseMediator = __webpack_require__(8);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isCmd = function isCmd(CmdClass) {
    return CmdClass && CmdClass.prototype instanceof _BaseCommand.BaseCommand;
};

function executeCommand(CmdClass) {
    if (!CmdClass) {
        return;
    }
    if (typeof CmdClass !== 'function') {
        return;
    }
    if (!isCmd(CmdClass)) throw new Error('invalid command class');
    var cmd = new CmdClass();

    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
    }

    return cmd.execute.apply(cmd, params);
}

function mapCommands(cmdMap) {
    var map = {};

    var _loop = function _loop(i) {
        var cmdObj = cmdMap[i];
        var CmdClass = null;
        var args = [];
        if (cmdObj.cmd && isCmd(cmdObj.cmd)) {
            CmdClass = cmdObj.cmd;
            args = cmdObj.args || [];
            map[i] = function () {
                var _this = this;

                var oriArgs = [].concat(Array.prototype.slice.call(arguments), [this.$data], _toConsumableArray(args)); //原参数+vm.data+传参
                oriArgs = oriArgs.map(function (item) {
                    if (typeof item === 'function') {
                        return item.call(_this);
                    }
                    return item;
                });
                executeCommand.apply(undefined, [CmdClass].concat(_toConsumableArray(oriArgs)));
            };
        } else if (isCmd(cmdObj)) {
            CmdClass = cmdObj;
            map[i] = function () {
                var oriArgs = [].concat(Array.prototype.slice.call(arguments), [this.$data]);
                executeCommand.apply(undefined, [CmdClass].concat(_toConsumableArray(oriArgs)));
            };
        } else {
            throw new Error('unknow command type.');
        }
    };

    for (var i in cmdMap) {
        _loop(i);
    }
    return map;
}

var VueMediator = exports.VueMediator = {

    methods: {
        $attachEvent: function $attachEvent() {
            var _mediator;

            return (_mediator = this._mediator).attachEvent.apply(_mediator, arguments);
        },
        $callEvent: function $callEvent() {
            var _mediator2;

            return (_mediator2 = this._mediator).callEvent.apply(_mediator2, arguments);
        },
        $detachEvent: function $detachEvent() {
            var _mediator3;

            return (_mediator3 = this._mediator).off.apply(_mediator3, arguments);
        },
        $mapEvents: function $mapEvents() {}
    },

    mounted: function mounted() {
        this.$mapEvents();
    },
    beforeCreate: function beforeCreate() {
        this._mediator = new _BaseMediator.BaseMediator();
    },
    beforeDestroy: function beforeDestroy() {
        this._mediator.destroy();
        this._mediator = null;
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventDispatcher = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IDUtil = __webpack_require__(2);

var _BaseCommand = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = exports.EventDispatcher = function () {
    function EventDispatcher() {
        _classCallCheck(this, EventDispatcher);

        this._evts = {};
    }

    _createClass(EventDispatcher, [{
        key: '$on',
        value: function $on(type, handler) {
            for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                data[_key - 2] = arguments[_key];
            }

            if (typeof handler !== 'function') {
                throw new Error('expects handler as a function.');
            }
            var eId = _IDUtil.IDUtil.uuid();
            var count = EventDispatcher._count++;
            this._evts[eId] = { type: type, handler: handler, data: data, count: count };
            return eId;
        }
    }, {
        key: '$off',
        value: function $off(eId) {
            if (!eId) {
                return false;
            }
            if (this._evts[eId]) {
                this._evts[eId] = null;
                return delete this._evts[eId];
            }
            return false;
        }
    }, {
        key: '$emit',
        value: function $emit(type) {
            var eInfos = this.$getEventInfosByType(type);
            var n = eInfos.length;

            for (var _len2 = arguments.length, payloads = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                payloads[_key2 - 1] = arguments[_key2];
            }

            for (var i = 0; i < n; i++) {
                var _eInfos$i = eInfos[i],
                    handler = _eInfos$i.handler,
                    data = _eInfos$i.data;

                var args = [].concat(_toConsumableArray(data), payloads);
                handler.apply(undefined, _toConsumableArray(args));
            }
        }
    }, {
        key: '$hasEvent',
        value: function $hasEvent(type) {
            var eInfos = this.$getEventInfosByType(type);
            return !!eInfos.length;
        }
    }, {
        key: '$getEventInfosByType',
        value: function $getEventInfosByType(type) {
            var infos = [];
            for (var eId in this._evts) {
                if (this._evts.hasOwnProperty(eId)) {
                    var eType = this._evts[eId].type;

                    if (eType === type) {
                        infos.push(this._evts[eId]);
                    }
                }
            }
            return infos.sort(function (info1, info2) {
                return info1.count - info2.count;
            });
        }
    }]);

    return EventDispatcher;
}();

Object.defineProperty(EventDispatcher, '_count', {
    enumerable: true,
    writable: true,
    value: 0
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseMediator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventBus = __webpack_require__(1);

var _IDUtil = __webpack_require__(2);

var _BaseCommand = __webpack_require__(0);

var _FunUtil = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseMediator = exports.BaseMediator = function () {
    function BaseMediator() {
        _classCallCheck(this, BaseMediator);

        this._evts = {};
    }

    _createClass(BaseMediator, [{
        key: 'callEvent',
        value: function callEvent(target, eType) {
            var _target;

            if (!target) {
                target = _EventBus.EventBus.getInstance();
            }
            if (typeof target.$emit !== 'function') {
                throw new Error('target must extends EventDispatcher or an instance of Vue');
            }

            for (var _len = arguments.length, data = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                data[_key - 2] = arguments[_key];
            }

            (_target = target).$emit.apply(_target, [eType].concat(data));
        }
    }, {
        key: 'attachEvent',
        value: function attachEvent(target, eType, callback) {
            if (!target) {
                target = _EventBus.EventBus.getInstance();
            }
            if (typeof target.$on !== 'function') {
                throw new Event('target must extends EventDispatcher or an instance of Vue');
            }

            var isCmd = callback.prototype instanceof _BaseCommand.BaseCommand;

            for (var _len2 = arguments.length, data = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
                data[_key2 - 3] = arguments[_key2];
            }

            var eInfo = isCmd ? this._addCmdMap(target, eType, callback, data) : this._addEvtMap(target, eType, callback, data);
            this._evts[eInfo.eId] = eInfo;
            return eInfo.eId;
        }
    }, {
        key: '_addCmdMap',
        value: function _addCmdMap(target, eType, callback, data) {
            var cmd = new callback();
            if (!cmd.execute || typeof cmd.execute !== 'function') {
                throw new Error('The command must implement method [execute]');
            }
            return this._addEvtMap(target, eType, cmd.execute.bind(cmd), data);
        }
    }, {
        key: '_addEvtMap',
        value: function _addEvtMap(target, eType, callback, data) {
            var args = [callback].concat(_toConsumableArray(data));
            var handler = _FunUtil.FunUtil.partial.apply(_FunUtil.FunUtil, _toConsumableArray(args));
            var eId = target.$on(eType, handler);
            if (!eId) eId = _IDUtil.IDUtil.uuid();
            return { eId: eId, target: target, eType: eType, handler: handler };
        }
    }, {
        key: 'off',
        value: function off(eId) {
            if (!eId) {
                return;
            }
            var info = this._evts[eId];
            if (!info) {
                return;
            }
            var target = info.target,
                eType = info.eType,
                callback = info.callback;

            target.$off(eType, callback);
            target.$off(eId);
            delete this._evts[eId];
        }
    }, {
        key: 'clear',
        value: function clear() {
            var names = Object.getOwnPropertyNames(this._evts);
            var n = names.length;
            for (var i = 0; i < n; i++) {
                var name = names[i];
                this.off(name);
            }
            this._evts = {};
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.clear();
            this._vm = null;
        }
    }]);

    return BaseMediator;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseModel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventBus = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModel = exports.BaseModel = function () {
    function BaseModel() {
        _classCallCheck(this, BaseModel);

        this.evtBus = _EventBus.EventBus.getInstance();
    }

    _createClass(BaseModel, [{
        key: '$callEvent',
        value: function $callEvent(eType) {
            var _evtBus;

            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                rest[_key - 1] = arguments[_key];
            }

            (_evtBus = this.evtBus).$emit.apply(_evtBus, [eType].concat(rest));
        }
    }, {
        key: 'reset',
        value: function reset() {}
    }]);

    return BaseModel;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AjaxCommand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseCommand2 = __webpack_require__(0);

var _AjaxService = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AjaxCommand = exports.AjaxCommand = function (_BaseCommand) {
    _inherits(AjaxCommand, _BaseCommand);

    function AjaxCommand() {
        _classCallCheck(this, AjaxCommand);

        return _possibleConstructorReturn(this, (AjaxCommand.__proto__ || Object.getPrototypeOf(AjaxCommand)).apply(this, arguments));
    }

    _createClass(AjaxCommand, [{
        key: 'getService',
        value: function getService() {
            var service = new _AjaxService.AjaxService(this);
            return service;
        }
    }, {
        key: 'success',
        value: function success(response) {}
    }, {
        key: 'fail',
        value: function fail(error) {
            this.showError(error);
        }
    }]);

    return AjaxCommand;
}(_BaseCommand2.BaseCommand);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseService = exports.BaseService = function () {
    function BaseService(cmd) {
        _classCallCheck(this, BaseService);

        this._cmd = cmd;
    }

    _createClass(BaseService, [{
        key: "send",
        value: function send() {}
    }, {
        key: "cmd",
        get: function get() {
            return this._cmd;
        }
    }]);

    return BaseService;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SimpleCommand = undefined;

var _BaseCommand2 = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleCommand = exports.SimpleCommand = function (_BaseCommand) {
    _inherits(SimpleCommand, _BaseCommand);

    function SimpleCommand() {
        _classCallCheck(this, SimpleCommand);

        return _possibleConstructorReturn(this, (SimpleCommand.__proto__ || Object.getPrototypeOf(SimpleCommand)).apply(this, arguments));
    }

    return SimpleCommand;
}(_BaseCommand2.BaseCommand);

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-mec.js.map