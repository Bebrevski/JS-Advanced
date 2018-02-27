function solve(commands) {
    let processor = (function () {
        let text = '';

        return function processor(commandString) {
            let commandTokens = commandString.split(' ');

            switch (commandTokens[0]){
                case 'append': text += commandTokens[1]; break;
                case 'removeStart': text = text.slice(Number(commandTokens[1])); break;
                case 'removeEnd': text = text.slice(0, text.length - Number(commandTokens[1])); break;
                case 'print': console.log(text);
            }
        }
    })();

    for (let command of commands) {
        processor(command);
    }
}



solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);