let makeList = require('../02. Add Left Right Clear in List');
let expect = require('chai').expect;

describe('Test list', function () {
    let myList;
    beforeEach(function () {
        myList = makeList();
    });

    describe('Test add Left function', function () {
       it('can add multiple', function () {
           myList.addLeft('dude');
           myList.addLeft('is');
           myList.addLeft('Pesho');
           let result = myList.toString();
           expect(result).to.equal('Pesho, is, dude');
           expect(result.split(', ').length).to.equal(3);
       }) ;
    });

    describe('Test add Right function', function () {
        it('can add multiple', function () {
            myList.addRight('dude');
            myList.addRight('is');
            myList.addRight('Pesho');
            let result = myList.toString();
            expect(result).to.equal('dude, is, Pesho');
            expect(result.split(', ').length).to.equal(3);
        }) ;
    });

    describe('Test clear function', function () {
        it('works correctly', function () {
            myList.addLeft('dude');
            myList.addLeft('is');
            myList.addLeft('Pesho');
            myList.addRight(1);
            myList.addRight(3.14);
            myList.addRight({});
            let result = myList.toString();
            expect(result).to.equal('Pesho, is, dude, 1, 3.14, [object Object]');
            expect(result.split(', ').length).to.equal(6);
            myList.clear();
            result = myList.toString();
            expect(result).to.equal('');
        }) ;
    });

});