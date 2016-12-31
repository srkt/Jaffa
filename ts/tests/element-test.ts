/// <reference path="../../typings/index.d.ts"/>
import {Jaffa} from '../src/Jaffa.Element';

describe('Element tests',()=>{

    var elem:any;

    beforeEach(()=>{

        elem = Jaffa();

    });

    
    it('Element should not be null',()=>{
        
      expect(elem).not.toBeNull();

    });

    it('Anchor Tag should not be null',()=>{
      
      console.log(elem);
      expect(elem).toBeDefined();

    });


});