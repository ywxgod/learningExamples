"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductAFactory_1 = require("./ProductAFactory");
var ProductBFactory_1 = require("./ProductBFactory");
var Test = (function () {
    function Test() {
        var factoryA = new ProductAFactory_1.default();
        factoryA.doSomething('factoryA...');
        var factoryB = new ProductBFactory_1.default();
        factoryB.doSomething('factoryB...');
    }
    return Test;
}());
var test = new Test();
