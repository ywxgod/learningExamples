"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
const Singleton_1 = require("./../app/oop/Singleton");
describe('mocha use with ts test', () => {
    it('should error when new Singleton()', () => {
        should(function () { new Singleton_1.default(); }).throw();
    });
    it('singleton', () => {
        let singleton1 = Singleton_1.default.getInstace();
        singleton1.name = 'singleTon1';
        let singleton2 = Singleton_1.default.getInstace();
        should(singleton2.name).equal(singleton1.name);
    });
});
