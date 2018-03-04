function solve(obj) {
    let smallEngine = {power: 90, volume: 1800};
    let normalEngine = {power: 120, volume: 2400};
    let monsterEngine = {power: 200, volume: 3500};

    let hatchback = {type: 'hatchback', color: obj.color};
    let coupe = {type: 'coupe', color: obj.color};

    let output = {
        model: obj.model,
        engine: obj.power <= smallEngine.power ? smallEngine : obj.power <= normalEngine.power ? normalEngine : monsterEngine,
        carriage: obj.carriage === 'hatchback' ? hatchback : coupe,
        wheels: pushIt(obj.wheelsize)
    };

    return output;

    function pushIt(wheelsize) {
        if (wheelsize % 2 !== 0){
          return [wheelsize, wheelsize, wheelsize, wheelsize];
        }else {
          return [wheelsize - 1, wheelsize - 1, wheelsize - 1, wheelsize - 1];
        }
    }

}

console.log(solve({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));