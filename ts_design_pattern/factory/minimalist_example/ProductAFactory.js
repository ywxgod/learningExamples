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
var ProductA_1 = require("./ProductA");
var ProductAFactory = (function (_super) {
    __extends(ProductAFactory, _super);
    function ProductAFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductAFactory.prototype.createProduct = function () {
        return new ProductA_1.default();
    };
    return ProductAFactory;
}(ProductFactory_1.default));
exports.default = ProductAFactory;
