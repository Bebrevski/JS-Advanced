class PaymentProcessor {
    constructor(obj) {
        this.options = this.setOptions(obj);
        this.collection = [];
    }

    registerPayment(id, name, type, value) {
        if (id === '' || name === '') {
            throw new Error();
        }
        if (isNaN(value) && value !== null) {
            throw new Error();
        }
        for (let obj of this.collection) {
            if (obj.id === id){
                throw new Error();
            }
        }
        let found = false;
        for (let currentType of this.options.types) {
            if (currentType === type){
              found = true;
              break;
            }
        }
        if (!found){
            throw new Error();
        }

        this.collection.push({
            id: id,
            name: name,
            type: type,
            value: Number(value)
        });

    }

    deletePayment(id) {
        let found = false;
        let index;
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i].id === id){
              found = true;
              index = i;
            }
        }
        if (!found){
            throw new Error();
        }

        this.collection.splice(index, 1);

    }

    get(id) {
        let found = false;
        let index;
        for (let i = 0; i < this.collection.length; i++) {
            if (this.collection[i].id === id){
                found = true;
                index = i;
                break;
            }
        }
        if (!found){
            throw new Error();
        }
        let output = `Details about payment ID: ${id}\n`;
        output += `- Name: ${this.collection[index].name}\n`;
        output += `- Type: ${this.collection[index].type}\n`;
        output += `- Value: ${this.collection[index].value}`;

        return output;
    }

     setOptions(options) {
        if (options === undefined){
          return {
              types: ["service", "product", "other"],
              precision: 2
          }
        }
        if (options.precision === undefined && Array.isArray(options.types)){
          return {
              types: options.types,
              precision: 2
          }
        }
        if (options.types === undefined && !isNaN(options.precision)){
            return {
                types: ["service", "product", "other"],
                precision: Number(options.precision)
            }

        }

        return {
            types: options.types,
            precision: Number(options.precision)
        }
    }

    toString() {
        let output = 'Summary\n';
        output += `- Payments: ${this.collection.length}\n`;
        let balance = 0;

        for (let obj of this.collection) {
            balance += obj.value;
        }
        output += `- Balance: ${balance.toFixed(this.options.precision)}`;

        return output;
    }
}

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
console.log(transactionLog);




