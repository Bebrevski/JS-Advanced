function solve(arr) {
    let commandExecutor = (function () {
        let store = {};
        function create(name) {
            store[name] = {};
        }
        function createAndInherits(name, parentName) {
            store[name] = Object.create(store[parentName]);
        }
        function set(toName, key, value) {
            store[toName][`${key}`] = value;
        }
        function print(name) {
            let output = '';
            for (let prop in store[name]) {
                output += `${prop}:${store[name][prop]}, `;
            }
            console.log(output.substring(0, output.length - 2));
        }
        return {create, createAndInherits, set, print};
    })();

    for (let str of arr) {
        let tokens = str.split(' ');

        if (tokens.length === 2 && tokens[0] === 'create'){
          commandExecutor.create(tokens[1]);
        }else if (tokens.length === 2 && tokens[0] === 'print'){
          commandExecutor.print(tokens[1]);
        } else if (tokens.length > 2 && tokens[0] === 'create'){
            commandExecutor.createAndInherits(tokens[1], tokens[3])
        } else if (tokens.length > 2 && tokens[0] === 'set'){
          commandExecutor.set(tokens[1], tokens[2], tokens[3]);
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);