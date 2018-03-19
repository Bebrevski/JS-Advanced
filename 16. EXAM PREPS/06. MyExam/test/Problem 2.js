let expect = require('chai').expect;
let mocha = require('mocha');
let PaymentPackage = require('../Problem 2');

describe('Test class', function () {

    describe('Test initialization getter name', function () {
        it('takes valid parameters correct', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(myClass.name).to.equal('Pesho');
        });
        it('throw error if name is not a string', () => {
            expect(() => new PaymentPackage(10, 22)).to.throw(Error)
        });
        it('throw error if name is not a string', () => {
            let myClass = new PaymentPackage('sdfgsdg', 14);
            expect(() => myClass.VAT = -1).to.throw(Error)
        });
        it('should throw error', () => {
            let myClass = new PaymentPackage('again', 11);
            expect(() => myClass.value = -11).to.throw(Error)
        });
        it('throw error if name is not a string', () => {
            let myClass = new PaymentPackage('sdgsdg', 12);
            expect(() => myClass.VAT = 'o').to.throw(Error)
        });
        it('throw error if name is not a string', function () {
            let myClass;
            expect(() => {
                myClass = new PaymentPackage({}, 10)
            }).to.throw(Error);
        });
        it('should throw error', () => {
            expect(() => new PaymentPackage('asdas', -1)).to.throw(Error)
        });
        it('should throw error', () => {
            let myClass = new PaymentPackage('again', 11);
            expect(() => myClass.name = 22).to.throw(Error)
        });
        it('should throw error', () => {
            expect(() => new PaymentPackage('nsdfsdfame', 'opasdaa')).to.throw(Error)
        });
        it('should throw error', () => {
            expect(() => new PaymentPackage('', 2)).to.throw(Error)
        });
        it('throw error if name is empty string', function () {
            let myClass;
            expect(() => {
                myClass = new PaymentPackage('', 10)
            }).to.throw(Error);
        });
        it('throw error if no parameters are given', function () {
            expect(() => {
                new PaymentPackage()
            }).to.throw(Error);
        });
        it('should throw error', () => {
            let myClass = new PaymentPackage('nasdfsdfme', 1);
            expect(myClass.VAT).to.equal(20)
        });
        it('should throw error', () => {
            let myClass = new PaymentPackage('gjkghkj', 1);
            expect(myClass.active).to.equal(true)
        });
    });

    describe('Test initialization getter value', function () {
        it('takes valid parameters correct', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(myClass.value).to.equal(10);
        });
        it('throw error if value is not a number', function () {
            let myClass;
            expect(() => {
                myClass = new PaymentPackage('Pesho', '10')
            }).to.throw(Error);
        });
        it('should throw error', () => {
            let myClass = new PaymentPackage('again', 11);
            expect(() => myClass.active = 'false').to.throw(Error)
        });
        it('throw error if value is negative', function () {
            let myClass;
            expect(() => {
                myClass = new PaymentPackage('', -1)
            }).to.throw(Error);
        });
        it('throw error if no input', function () {
            let myClass;
            expect(() => {
                myClass = new PaymentPackage()
            }).to.throw(Error);
        });
    });

    describe('Test VAT', function () {
        it('has default value 20', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(myClass.VAT).to.equal(20);
        });
        it('can change VAT', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            myClass.VAT = 100;
            expect(myClass.VAT).to.equal(100);
        });
        it('throw error if VAT is not a number', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(() => {
                myClass.VAT = 'some'
            }).to.throw(Error);
        });
        it('throw error if VAT is negative', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(() => {
                myClass.VAT = -1
            }).to.throw(Error);
        });
    });

    describe('Test active', function () {
        it('defaul is true', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(myClass.active).to.equal(true);
        });
        it('', () => {
            let myClass = new PaymentPackage('opa', 1);
            myClass.VAT = 0;
            expect(myClass.VAT).to.equal(0)
        });
        it('can change activity', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            myClass.active = false;
            expect(myClass.active).to.equal(false);
        });
        it('throw error if not bool', function () {
            let myClass = new PaymentPackage('Pesho', 10);
            expect(() => {
                myClass.active = 'Pesho'
            }).to.throw(Error);
        });
        it('should throw error', () => {
            let myClass = new PaymentPackage('some', 120);
            expect(() => myClass.active = 'true').to.throw(Error)
        });
    });

    describe('Test toString', function () {
        it('print correct if true', function () {
            let myClass = new PaymentPackage('HR Services', 1500);
            let expecting = `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;
            expect(expecting).to.equal(`Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
        });
        it('', () => {
            let myClass = new PaymentPackage('opa', 1);
            myClass.active = false;
            expect(myClass.active).to.equal(false)
        });
        it('print correct if false', function () {
            let myClass = new PaymentPackage('HR Services', 1500);
            myClass.active = false;
            let expecting = `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;
            expect(expecting).to.equal(`Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
        });
    });

    describe('class have properties', function () {
        it("It should have initialized all getter and setters", function () {
            let myClass = new PaymentPackage('HR Services', 1500);
            expect(Object.getPrototypeOf(myClass).hasOwnProperty('name')).to.be.equal(true);
            expect(Object.getPrototypeOf(myClass).hasOwnProperty('value')).to.be.equal(true);
            expect(Object.getPrototypeOf(myClass).hasOwnProperty('VAT')).to.be.equal(true);
            expect(Object.getPrototypeOf(myClass).hasOwnProperty('active')).to.be.equal(true);
            expect(Object.getPrototypeOf(myClass).hasOwnProperty('toString')).to.be.equal(true);
        });
        it('gdfg', () => {
            let myClass = new PaymentPackage('nasdame', 1);
            myClass.value = 12;
            expect(myClass.value).to.equal(12)
        })
    });

    describe('is instance of class', function () {
        it('', () => {
            let myClass = new PaymentPackage('nasdgsdgme', 31);
            myClass.name = 'nema nikoj';
            expect(myClass.name).to.equal('nema nikoj')
        });
        it('s', () => {
            let myClass = new PaymentPackage('opa', 21);
            myClass.active = true;
            expect(myClass.active).to.equal(true)
        });
        it("is a instance of class", function () {
            let myClass = new PaymentPackage('p', 1);
            expect(typeof myClass).to.equal('object');
        });
        it('', () => {
            let myClass = new PaymentPackage('naasdasdme', 143);
            myClass.value = 0;
            expect(myClass.value).to.equal(0)
        });
    });

    describe('more test', function () {

        it('', () => {
            let myClass = new PaymentPackage('name', 1);
            myClass.active = false;
            expect(myClass.toString()).to.equal('Package: name (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
        });
        it('should have properties', () => {
            let Pp = new PaymentPackage('name', 1);

            expect(Pp.toString()).to.equal('Package: name\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2')
        })
    });

});