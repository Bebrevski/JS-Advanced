let expect = require('chai').expect;
let lookupChar = require('../03. Char Lookup');

describe('Test func that returns char at given index', function () {
    it('should return P for string Pesho and index 0',function () {
        expect(lookupChar('Pesho', 0)).to.be.equal('P');
    });
    it('should return o for string Pesho and index 4',function () {
        expect(lookupChar('Pesho', 4)).to.be.equal('o');
    });
    it('should return "Incorrect index" for string "Pesho" and index 5',function () {
        expect(lookupChar('Pesho', 5)).to.be.equal('Incorrect index');
    });
    it('should return "Incorrect index" for string "Pesho" and index -1',function () {
        expect(lookupChar('Pesho', -1)).to.be.equal('Incorrect index');
    });
    it('should return undefined for type different form string',function () {
        expect(lookupChar({}, 0)).to.be.equal(undefined);
    });
    it('should return undefined if type is string and index is not a number',function () {
        expect(lookupChar("Pesho", {})).to.be.equal(undefined);
    });
    it('should return undefined for no string and no number',function () {
        expect(lookupChar(1, 'OPesho')).to.be.equal(undefined);
    });
    it('should return undefined for invalid index',function () {
        expect(lookupChar("Pesho", '1')).to.be.equal(undefined);
    });
    it('should return undefined for invalid index',function () {
        expect(lookupChar("Pesho", 3.14)).to.be.equal(undefined);
    });
});