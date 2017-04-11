"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ProductFactory_1 = require("./ProductFactory");
var ProductB_1 = require("./ProductB");
var ProductBFactory = (function (_super) {
    __extends(ProductBFactory, _super);
    function ProductBFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductBFactory.prototype.createProduct = function () {
        return new ProductB_1.default();
    };
    return ProductBFactory;
}(ProductFactory_1.default));
exports.default = ProductBFactory;
