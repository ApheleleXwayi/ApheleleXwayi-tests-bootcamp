// yearsAgo 
describe('testing yearsAgo function', function () {
    it('should return  yearsAgo when its caltculate  yearsAgo from ', function () {
        assert.deepEqual( 28, yearsAgo(1994));

    });
    it('should return  yearsAgo when its caltculate  yearsAgo ', function () {
        assert.deepEqual( 27, yearsAgo(1995));

    });
    it('should return  yearsAgo when its caltculate  yearsAgo ', function () {
        assert.deepEqual( 26, yearsAgo(1996));

    });
});


// console.log((new Date().getFullYear() - 2000), yearsAgo(2000));
// console.log((new Date().getFullYear() - 1976), yearsAgo(1976))