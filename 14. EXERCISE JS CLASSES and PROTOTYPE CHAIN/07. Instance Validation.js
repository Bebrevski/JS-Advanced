class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName
    }

    set clientId(id) {
        if (!/^[0-9]{6}$/.test(id)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = id;
    }

    get clientId() {
        return this._clientId;
    }

    set email(email) {
        if (!/^[A-Za-z0-9]+@[A-Za-z.]+$/.test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = email;
    }

    get firstName() {
        return this._email;
    }

    set firstName(firstName) {
        if (!/^.{3,20}$/.test(firstName)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (!/^[A-Za-z]+$/.test(firstName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        if (!/^.{3,20}$/.test(lastName)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (!/^[A-Za-z]+$/.test(lastName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }
}

let acc = new CheckingAccount('1324', 'ivan@some.com', 'Ivan', 'Petrov');
let acc1 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')