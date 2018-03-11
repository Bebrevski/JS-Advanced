class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat){
          this.uniteRats.push(otherRat);
        }
    }

    getRats() {
        return this.uniteRats
    }

    toString() {
        let string = `${this.name}\n`;
        for (let rat of this.uniteRats) {
            string += '##' + rat.name + '\n';
        }

        return string;
    }
}