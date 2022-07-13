// isFromBellville
describe('testing the regstration is fromBellvel function' , function(){
    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CJ 123'))) ;
    });


    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CA 123'))) ;
    });

    it('it should return "false" when the registration does not start with "CY"' , function(){
        assert.equal( false,(isFromBellville('CB 123'))) ;
    });
});