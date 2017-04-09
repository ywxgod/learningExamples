import * as should from 'should';

describe('mocha use with ts test', ()=>{

    it('should pass', ()=>{
        should('foo').not.be.equal('bar');
    });

});