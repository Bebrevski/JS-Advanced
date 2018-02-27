function solve() {
    let record = new Map();

    for (let arg of arguments) {
        let currentType = typeof arg;

        console.log(`${currentType}: ${arg}`);

        if (!record.has(currentType)){
          record.set(currentType, 0);
        }

        record.set(currentType, record.get(currentType) + 1);
    }

    Array.from(record)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });