var each = util.each;

it('basic', function() {
    var tests = [
        ['http://www.surunzi.com', true],
        ['//www.surunzi.com', false],
        ['surunzi.com', false]
    ];

    each(tests, function(test) {
        expect(isAbsoluteUrl(test[0])).to.equal(test[1]);
    });
});
