function getFibonator() {
    let first = 0;
    let second = 1;
    let next = first + second;
    return function () {
        first = second;
        second = next;
        next = first + second;

        return first;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

