function subsum(arr, start, end) {
    if (!Array.isArray(arr)){
      return NaN;
    }
    start = start < 0 ? 0 : start;
    end = end > arr.length - 1 ? arr.length - 1 : end;

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));
