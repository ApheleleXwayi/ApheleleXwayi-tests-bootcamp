3//  countRegNumber
describe('testing  countRegNumber function' , function(){
    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CJ 123'))) ;
    
    
    });
    it('it should return "3" when calculate the total number of registration Numbers ' , function(){
        assert.equal( "",(isFromBellville('CA 182736,CY 523519,CJ 812328'))) ;
    
    
    }); 
    it('it should return "2" when calculate the total number of registration Numbers ' , function(){
        assert.equal( "",(isFromBellville('CA 182736,CY 523519'))) ;
    
    
    }); 
    });
    