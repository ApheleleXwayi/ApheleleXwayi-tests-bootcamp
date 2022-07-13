// regCheck
describe('test regCheck function' , function(){
    it('it should return "true" whe the registration does not start with "CA"' , function(){
        assert.equal( false,(isFromCapeTown('CJ 123'))) ;
    });
    it('it should return "false" whe the registration does not start with "CA"' , function(){
        assert.equal( false,(isFromCapeTown('CJ 123'))) ;
    });
    it('it should return "false" whe the registration does not start with "CA"' , function(){
        assert.equal( false,(isFromCapeTown('CY 123'))) ;
    });

});