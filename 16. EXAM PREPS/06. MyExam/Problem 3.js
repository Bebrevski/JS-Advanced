class PaymentProcessor {
    constructor(options) {
        this.options = options;
        if (!options) {
            this.options = { types: ["service", "product", "other"], precision: 2
            }
        }else{
            if(!options.hasOwnProperty('types')){
                this.options['types'] = ["service", "product", "other"];
            }else {
                this.options['types'] = options['types'];
            }

            if(!options.hasOwnProperty('precision')){
                this.options['precision'] = 2;
            }else {
                this.options['precision'] = options['precision'];
            }
        }

        this.payments = [];
        this.balance = 0;
    }

    registerPayment(id, name, type, value) {
        if(id === '' ||
            name === '' ||
            typeof(value) !== 'number' ||
            !this.options.types.includes(type) ||
            this.payments.map(x=> x.id).includes(id)){

            throw new  Error('invalid type');
        }

        value = value.toFixed(Number(this.options.precision));

        this.payments.push({id,name,type,value});
        this.balance += Number(value);
    }

    deletePayment(id) {
        let payment;
        for(let currentPayment of this.payments){
            if(currentPayment.id === id){
                payment = currentPayment;
            }
        }

        if(!payment){
            throw new Error('ID not found');
        }

        this.balance -= Number(payment.value);
        for (let i =0; i < this.payments.length; i++)
            if (this.payments[i].id === payment.id) {
                this.payments.splice(i,1);
                break;
            }
    }

    get(id) {
        let payment;
        for(let currentPayment of this.payments){
            if(currentPayment.id === id){
                payment = currentPayment;
            }
        }

        if(payment === undefined){
            throw new Error('ID not found');
        }

        let result = `Details about payment ID: ${payment.id}\n`;
        result += `- Name: ${payment.name}\n`;
        result +=`- Type: ${payment.type}\n`;
        result += `- Value: ${payment.value}`;

        return result;
    }

    setOptions(options) {
        if(options.hasOwnProperty('types')){
            this.options.types = options.types;
        }

        if(options.hasOwnProperty('precision')){
            this.options.precision = options.precision;
        }
    }

    toString() {
        let result = `Summary:\n`;
        result += `- Payments: ${this.payments.length}:\n`;
        result += `- Balance: ${this.balance}`;

        return result;
    }
}