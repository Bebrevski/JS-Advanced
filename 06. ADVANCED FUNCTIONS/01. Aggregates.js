function aggregate(arr) {
    function reduce(arr, func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1)) {
            result = func(result, nextElement);
        }
        return result;
    }

    console.log('Sum = ' + reduce([2,3,10,5], (a, b) => a + b));
    console.log('Min = ' + reduce([2,3,10,5], (a, b) => Math.min(a, b)));
    console.log('Max = ' + reduce([2,3,10,5], (a, b) => Math.max(a, b)));
    console.log('Product = ' + reduce([2,3,10,5], (a, b) => a * b));
    console.log('Join = ' + reduce([2,3,10,5], (a, b) => '' + a + b));
}
