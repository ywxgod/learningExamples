"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor() {
        this._name = '';
        if (Singleton._instance) {
            throw new Error('Please use getInstance.');
        }
    }
    static getInstace() {
        return Singleton._instance;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
Singleton._instance = new Singleton();
exports.default = Singleton;
