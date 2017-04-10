import * as should from 'should';
import Singleton from './../app/oop/Singleton';

describe('mocha use with ts test', ()=>{

    it('should error when new Singleton()', ()=>{
        should(function(){new Singleton()}).throw();
    });

    it('singleton',()=>{
        let singleton1 = Singleton.getInstace();
        singleton1.name = 'singleTon1';
        let singleton2 = Singleton.getInstace();
        should(singleton2.name).equal(singleton1.name);
    })

});