"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const should = require("should");
describe('mocha use with ts test', () => {
    it('should pass', () => {
        should('foo').not.be.equal('bar');
    });
});
