let expect = require('chai').expect;
let isOddOrEven = require('../02. Even Or Odd');

describe('Test if string length is Odd or Even', function () {
    it('should return even for Peshoy',function () {
        expect(isOddOrEven('Peshoy')).to.be.equal('even');
    });
    it('should return odd for Pesho',function () {
        expect(isOddOrEven('Pesho')).to.be.equal('odd');
    });
    it('should return even for empty string',function () {
        expect(isOddOrEven('')).to.be.equal('even');
    });
    it('should return undefined for type different form string',function () {
        expect(isOddOrEven(1)).to.be.equal(undefined);
    });
});