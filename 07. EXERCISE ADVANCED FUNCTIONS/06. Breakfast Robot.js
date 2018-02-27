let solution = function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function (inputString) {
        let inputData = inputString.split(' ');
        let command = inputData[0];

        if (command === 'restock') {
            let microElement = inputData[1];
            let quantity = Number(inputData[2]);
            robot[microElement] += quantity;
            return 'Success';
        } else if (command === 'report') {
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`;
        } else if (command === 'prepare') {
            let selectedProduct = inputData[1];
            let selectedQuantity = Number(inputData[2]);
            let currentProductStats = products[selectedProduct];

            let canProductBeCooked = true;
            for (let microElement in currentProductStats) {
                if (currentProductStats.hasOwnProperty(microElement)){
                    let microElementQuantity = currentProductStats[microElement];
                    if (robot[microElement] < microElementQuantity * selectedQuantity){
                 canProductBeCooked = false;
                 return `Error: not enough ${microElement} in stock`;
                 break;
                    }
                }
            }

            if (canProductBeCooked){
                for (let microElement in currentProductStats) {
                    if (currentProductStats.hasOwnProperty(microElement)){
                        let microElementQuantity = currentProductStats[microElement];
                        robot[microElement] -= microElementQuantity * selectedQuantity;
                    }
                }
                return 'Success';
            }
        }
    }
};

solution = solution();
solution('prepare cheverme 1');
solution('restock protein 10');
solution('prepare cheverme 1');
solution('restock carbohydrate 10');
solution('prepare cheverme 1');
solution('restock fat 10');
solution('prepare cheverme 1');
solution('restock flavour 10');
solution('prepare cheverme 1');
solution('report');

