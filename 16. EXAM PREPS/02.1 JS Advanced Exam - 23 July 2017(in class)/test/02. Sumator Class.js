let Sumator = require('../02. Sumator Class');
let expect = require('chai').expect;
let mocha = require('mocha');

//let s = new Sumator();

describe('Sumator Unit Tests', function () {
    let mySumator;

    beforeEach(function () {
       mySumator = new Sumator();
    });

    it('test if data length is empty', function () {
        expect(mySumator.data.length).to.equal(0);
    });

    describe('add function tests', function () {
        it('add only numbers', function () {
            mySumator.add(5);
            mySumator.add(10);
            mySumator.add(15);

            expect(mySumator.toString()).to.equal('5, 10, 15');
        });

        it('add only strings', function () {
            mySumator.add('one');
            mySumator.add('two');
            mySumator.add('three');

            expect(mySumator.data.join(', ')).to.equal('one, two, three');
        });

        it('add only objects', function () {
            mySumator.add({name: 'Me'});
            mySumator.add({});

            expect(mySumator.data.join(', ')).to.equal('[object Object], [object Object]');
        });

        it('add mix types', function () {
            mySumator.add({name: 'Me'});
            mySumator.add(4);
            mySumator.add("Pesho");
            mySumator.add([]);

            expect(mySumator.data.join(', ')).to.equal('[object Object], 4, Pesho, ');
        });
    });

    describe('Test sum nums function', function () {
        it('sum only numbers', function () {
            mySumator.add(4);
            mySumator.add(5);
            mySumator.add(6);
            mySumator.add(7);
            expect(mySumator.sumNums()).to.equal(22);
        });

        it('sum with no numbers', function () {
            mySumator.add('Pesho');
            mySumator.add({});
            mySumator.add({name: ''});
            expect(mySumator.sumNums()).to.equal(0);
        });

        it('sum with no numbers', function () {
            mySumator.add('Pesho');
            mySumator.add({});
            mySumator.add({name: ''});
            mySumator.add(4);
            mySumator.add(5);
            expect(mySumator.sumNums()).to.equal(9);
        });
    });

    describe('Test remove by filter', function () {
        it('removes all odd numbers', function () {
            for (let i = 0; i <= 10; i++) {
                mySumator.add(i);
            }

            mySumator.removeByFilter((x) => x % 2 !== 0);
            expect(mySumator.data.join(', ')).to.equal('0, 2, 4, 6, 8, 10');
        });

        it('removes all odd numbers', function () {
            for (let i = 0; i <= 10; i++) {
                mySumator.add(i);
            }

            mySumator.removeByFilter((x) => x > 5);
            expect(mySumator.data.join(', ')).to.equal('0, 1, 2, 3, 4, 5');
        });

        it('throws exception', function () {
            for (let i = 0; i <= 10; i++) {
                mySumator.add(i);
            }

            expect(() => mySumator.removeByFilter(undefined)).to.throw();
        });
    });

    describe('test toString', function () {
       it('with items in array', function () {
           mySumator.add(4);
           mySumator.add('Pesho');
           expect(mySumator.toString()).to.equal('4, Pesho');
       }) ;

        it('with items in array', function () {
            expect(mySumator.toString()).to.equal('(empty)');
        }) ;
    });

    describe('Check if functions exist', function () {
        it('data is not undefined', function () {
            expect(mySumator.data !== undefined).to.equal(true);
        });
        it('add function exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true);
        });
        it('removeByFilter exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true);
        });
        it('toString exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true);
        });
    });

});
