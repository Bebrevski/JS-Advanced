function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [destination, price, status] = arr[i].split('|');
        price = Number(price);

        arr[i] = new Ticket(destination, price, status);
    }

    arr.sort((a, b) => {
        if (a[criteria] > b[criteria]) return 1;
        if (a[criteria] < b[criteria]) return -1;
    });

    return arr;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));