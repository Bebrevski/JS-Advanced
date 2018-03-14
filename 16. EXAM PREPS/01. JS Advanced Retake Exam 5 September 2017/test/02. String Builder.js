let StringBuilder = require('../02. String Builder').StringBuilder;
let mocha = require('mocha');
let expect = require('chai').expect;

describe("Test String Builder class", function () {
    let myStringBuilder;

    beforeEach(function () {
        myStringBuilder = new StringBuilder();
    });

    it("has all properties", function () {
        expect(myStringBuilder.hasOwnProperty('_stringArray')).to.equal(true, 'Missing property');
    });

    it("is a instance of class", function () {
        expect(typeof myStringBuilder).to.equal('object');
    });

    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(myStringBuilder).hasOwnProperty('append')).to.equal(true, 'Missing add function');
        expect(Object.getPrototypeOf(myStringBuilder).hasOwnProperty('prepend')).to.equal(true, 'Missing prepend function');
        expect(Object.getPrototypeOf(myStringBuilder).hasOwnProperty('insertAt')).to.equal(true, 'Missing insertAt function');
        expect(Object.getPrototypeOf(myStringBuilder).hasOwnProperty('remove')).to.equal(true, 'Missing remove function');
        expect(Object.getPrototypeOf(myStringBuilder).hasOwnProperty('toString')).to.equal(true, 'Missing toString() function');
    });

    it('must initialize empty array', function () {
       expect(myStringBuilder._stringArray instanceof Array).to.equal(true, 'property must be of type Array')
    });

    it("can add a string", function () {
        myStringBuilder.append('Pesho');
        expect(myStringBuilder._stringArray.length).to.equal(5, "Element wasn't converted and added");
    });

    it("can be initialized with no input", function () {
        myStringBuilder._stringArray = '';
        expect(myStringBuilder._stringArray.length).to.equal(0, "");
    });

    it('correct append char array', function () {
        myStringBuilder.append('Pesho');
        expect(myStringBuilder.toString()).to.equal('Pesho', 'append didn"t work correct')
    });

    it('correct prepend char array', function () {
        myStringBuilder.append(' is dude');
        myStringBuilder.prepend('Pesho');
        expect(myStringBuilder.toString()).to.equal('Pesho is dude', 'prepend didn"t work correct')
    });

    it('correct insertAt function', function () {
        myStringBuilder.append(' is dude');
        myStringBuilder.prepend('Pesho');
        myStringBuilder.insertAt(',', 5);
        myStringBuilder.insertAt(', is he?', 14);
        expect(myStringBuilder.toString()).to.equal('Pesho, is dude, is he?', 'insertAt didn"t work correct')
    });

    it('correct remove function', function () {
        myStringBuilder.append(' is dude');
        myStringBuilder.prepend('Pesho');
        myStringBuilder.insertAt(',', 5);
        myStringBuilder.insertAt(', is he?', 14);
        myStringBuilder.remove(14, 8);
        expect(myStringBuilder.toString()).to.equal('Pesho, is dude', 'remove didn"t work correct')
    });

    it('throw error if type is not string', function () {
        expect(function () {
            myStringBuilder.append(5)
        }).to.throw('Argument must be string');
    });

    it('toString returns empty string when empty', function () {
        expect(myStringBuilder.toString()).to.equal('', 'toString didnt work correctly')
    })
});