// 8transportFee
describe('testing the  transportFee function' , function(){
    it('its should return R20 the transportFee  when its in the "morning"' ,function(){
        assert.equal(transportFee('morning'));

    });
   
    it('its should return R10 the transportFee  when its in the "afternoon"' ,function(){
        // assert.equal(transportFee('afternoon'));
        assert.equal(transportFee('afternoon'), 'R10');
    });

   
    it('its should return free  transportFee  when its in the "nightshift"' ,function(){
        assert.equal(transportFee('nightshift'), 'free');

    });
});
