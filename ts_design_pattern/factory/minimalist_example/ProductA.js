"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductA = (function () {
    function ProductA() {
    }
    ProductA.prototype.doSomething = function (name) {
        console.log("ProductA: dosomething - " + name);
    };
    return ProductA;
}());
exports.default = ProductA;
