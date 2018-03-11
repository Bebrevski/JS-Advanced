class Stringer {
    constructor(string, initialLength) {
        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0){
            return this.innerLength = 0;
        }

        return this.innerLength -= length;
    }

    toString() {
        if (this.innerString.length <= this.innerLength){
          return this.innerString;
        }

        return this.innerString.slice(0, this.innerLength) + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
