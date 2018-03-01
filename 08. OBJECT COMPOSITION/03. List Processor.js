function solve(arr) {
    let commandExecutor = (function () {
        let result = [];
        function add(str) {
            result.push(str)
        }
        function remove(str) {
            result = result.filter(e => e !== str)
        }
        function print() {
            console.log(result.join(','));
        }
        return {add, remove, print};
    }());

    for (let i = 0; i < arr.length; i++) {
        let [command, str] = arr[i].split(' ');

        commandExecutor[command](str);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);