let expect = require('chai').expect;
const SUM_NUMS = require('../04. Sum of Numbers');

describe('Test sumNumbers', function () {
    it('Simple calculation', function () {
        expect(SUM_NUMS([1, 2])).to.be.equal(3)
    });
    it('Array with one element (Number)', function () {
        expect(SUM_NUMS([1])).to.be.equal(1)
    });
    it('Decimal numbers', function () {
        expect(SUM_NUMS([1.5, 2.5, -1])).to.be.equal(3)
    });
    it('Empty array', function () {
        expect(SUM_NUMS([])).to.be.equal(0)
    });
    it('Array with one element (String)', function () {
        expect(SUM_NUMS(['Invalid Data'])).to.be.NaN
    });
    it('String input', function () {
        expect(SUM_NUMS('Some string')).to.be.NaN
    });
});

