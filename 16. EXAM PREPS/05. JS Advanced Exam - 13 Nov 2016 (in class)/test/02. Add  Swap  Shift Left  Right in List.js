let createList = require('../02. Add  Swap  Shift Left  Right in List');
let expect = require('chai').expect;

describe('Test function', function () {

    let list;
    beforeEach(function () {
        list = createList();
    });

    describe('add', function () {
        it('can add multiple',function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            let output = list.toString();
            expect(output).to.equal('pesho, gosho, 5');
        });


    });

    describe('shiftLeft', function () {
        it('shifts correctly',function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.shiftLeft();
            let output = list.toString();
            expect(output).to.equal('gosho, 5, pesho');
        });
    });

    describe('shiftRight', function () {
        it('shifts correctly',function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.shiftRight();
            let output = list.toString();
            expect(output).to.equal('5, pesho, gosho');
        });

    });

    describe('swap', function () {
        /*
        first index < 0 || > length
        second index < 0 || > length
        non Integer
        = 0
        = length
        first === second
         */
        it('first index negative', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(-1, 2);
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });

        it('first index equal length', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(4, 2);
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });

        it('first index non integer', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap('1', 2);
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });

        it('first index equals 0', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(0, 2);
            expect(output).to.be.true;
            expect(list.toString()).to.equal('5, gosho, pesho, 6');
        });


        it('second index negative', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(1, -1);
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });

        it('second index equal length', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(2, 4);
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });

        it('second index non integer', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(1, '2');
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });

        it('second index equals 0', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(1, 0);
            expect(output).to.be.true;
            expect(list.toString()).to.equal('gosho, pesho, 5, 6');
        });

        it('indexes are equal', function () {
            list.add('pesho');
            list.add('gosho');
            list.add(5);
            list.add(6);
            let output = list.swap(2, 2);
            expect(output).to.be.false;
            expect(list.toString()).to.equal('pesho, gosho, 5, 6');
        });
    });

});