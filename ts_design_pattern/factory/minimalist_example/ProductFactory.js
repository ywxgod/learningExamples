"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductFactory = (function () {
    function ProductFactory() {
    }
    ProductFactory.prototype.createProduct = function () {
        throw new Error('should call by subclass.');
    };
    ProductFactory.prototype.doSomething = function (name) {
        var product = this.createProduct();
        product.doSomething(name);
    };
    return ProductFactory;
}());
exports.default = ProductFactory;
