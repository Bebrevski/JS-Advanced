class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () {
            return id++;
        }
    }

    add(entity) {

        this._vrfyEntity(entity);

        let id = this.nextId();

        this.data.set(id, entity);
        return id;
    }

    get(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw  new Error(`Entity with id: ${id} does not exist!`)
        }

        this._vrfyEntity(newEntity);

        this.data.set(id, newEntity);
    }

    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }

    get count() {
        return this.data.size;
    }

    _vrfyEntity(entity) {
        for (let propName in this.props) {
            if (!entity.hasOwnProperty(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }
        }

        for (let propName in entity) {
            let val = entity[propName];
            if (typeof val !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is not of correct type!`);
            }
        }
    }
}

let properties = {name: "string", age: 19, birthday: {}};
let repository = new Repository(properties);
let entity = {name: "Kiril", age: 19, birthday: new Date(1998, 0, 7)};
repository.add(entity);
repository.add(entity);
console.log(repository.get(0));
console.log(repository.get(1));
entity = {name: 'Valio', age: 19, birthday: new Date(1998, 0, 7)};
repository.update(1, entity);
console.log(repository.get(1));
repository.del(0);
console.log(repository.count);
let anotherEntity = {name1: 'Nakov', age: 26, birthday: new Date(1991, 0, 21)};
repository.add(anotherEntity);
anotherEntity = { name: 'Nakov', age: 26, birthday: 1991 };
repository.add(anotherEntity);
//repository.del(-1);
