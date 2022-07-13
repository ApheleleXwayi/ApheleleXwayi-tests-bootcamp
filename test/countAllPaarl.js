countAllPaarl
describe('testing  countAllPaarl function' , function(){
    it('it should return "3" when calculate the total number of registration Numbers ' , function(){
        assert.equal( "",(countAllPaarl('CA 182736,CY 523519,CJ 812328'))) ;
    
    
    });
    it('it should return "2" when calculate the total number of registration Numbers' , function(){
        assert.equal( "",(countAllPaarl('CA 182736,CY 523519'))) ;
    
    
    }); 
    it('it should return "3" when calculate the total number of registration Numbers' , function(){
        assert.equal( "",(countAllPaarl('CA 182736,CY 523519,CJ 812328'))) ;
    
    
    }); 
    });
    
  